export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shareURL = searchParams.get("shareURL");
  if (!shareURL) {
    return Response.json({ msg: "Error. shareURL is required" });
  }

  const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${shareURL}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY as string,
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return Response.json(result.data);
    // return new NextResponse(result, {
    //   status: 200,
    //   statusText: "OK",
    // });
  } catch (error) {
    return Response.json({ message: error });
  }
}
