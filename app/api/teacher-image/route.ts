import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('Missing image URL', { status: 400 });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
      // Ensure we handle redirects if any
      redirect: 'follow',
    });

    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.status} ${response.statusText}`);
      return new NextResponse('Failed to fetch image', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'image/webp';
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
