import { NextResponse } from 'next/server';
import translate from 'google-translate-api-x';

export async function POST(request: Request) {
    try {
        const { text, targetLang } = await request.json();

        if (!text || !targetLang) {
            return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
        }

        // Optimization: If text is short numbers or simple codes, return as is
        if (!isNaN(Number(text)) || text.length < 2) {
            return NextResponse.json({ translatedText: text });
        }

        // Perform Translation
        const res = await translate(text, { to: targetLang });

        return NextResponse.json({ translatedText: (res as any).text });

    } catch (error) {
        console.error('Translation Error:', error);
        // Fallback: Return original text if translation fails (prevents crash)
        return NextResponse.json({ translatedText: (request as any).text }); // simple fallback
    }
}
