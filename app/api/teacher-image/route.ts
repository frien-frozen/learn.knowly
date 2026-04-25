import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing image URL' }, { status: 400 });
  }

  if (!imageUrl.includes('.blob.vercel-storage.com')) {
    return NextResponse.json({ error: 'Invalid source — must be a Vercel Blob URL' }, { status: 403 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json({
      error: 'BLOB_READ_WRITE_TOKEN env var is missing on learn.knowly. Add it in Vercel project settings (copy value from teacher.knowly project).',
    }, { status: 500 });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: { Authorization: `Bearer ${token}` },
      redirect: 'follow',
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      return NextResponse.json({
        error: `Upstream blob returned ${response.status} ${response.statusText}`,
        upstreamBody: body.slice(0, 500),
        hint: response.status === 401 || response.status === 403
          ? 'BLOB_READ_WRITE_TOKEN is set but does not match the store that owns this blob. Copy the exact value from teacher.knowly Vercel env.'
          : undefined,
      }, { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'image/webp';
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      error: 'Proxy fetch threw',
      message: error?.message || String(error),
    }, { status: 500 });
  }
}
