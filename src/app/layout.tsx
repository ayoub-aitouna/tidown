import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "TikTok Video Downloader | Free & Fast Download",
  description:
    "Download TikTok videos quickly and easily with our free TikTok Video Downloader. No watermarks, high quality.",
  keywords:
    "TikTok video downloader, free TikTok download, TikTok no watermark, download TikTok videos, TikTok downloader online",
  applicationName: "TikTok Video Downloader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black-950`}>{children}</body>
    </html>
  );
}
