export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("videoUrl");
  if (!videoUrl) return Response.json({ msg: "Error. videoUrl is required" });
  try {
    const videoResponse = await fetch(videoUrl);
    const headers = new Headers(videoResponse.headers);
    headers.set(
      "Content-Disposition",
      'attachment; filename="tiktok_video.mp4"'
    );
    return new NextResponse(videoResponse.body, {
      status: 200,
      statusText: "OK",
      headers: headers,
    });
  } catch (error) {
    return Response.json({ message: error });
  }
}
