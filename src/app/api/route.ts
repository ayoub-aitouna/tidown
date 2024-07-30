import puppeteer from 'puppeteer';



const getVideoUrl = async (pageUrl: string): Promise<string | null> => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(pageUrl, { waitUntil: 'networkidle2' });

        const videoUrl = await page.evaluate(() => {
            const videoElement = document.querySelector('video');
            return videoElement ? videoElement.src : null;
        });

        await browser.close();
        return videoUrl;
    } catch (error) {
        console.error('Error extracting video URL:', error);
        await browser.close();
        return null;
    }
};


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const shareURL = searchParams.get('shareURL')
    if (!shareURL) {
        return Response.json({ msg: 'Error. shareURL is required' })
    }

    const videoUrl = await getVideoUrl(shareURL);
    return new Response(JSON.stringify({ videoUrl }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
