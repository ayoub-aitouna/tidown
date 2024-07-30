import Image from "next/image";
import React from "react";

const LeanMore = () => {
  return (
    <section id="lean-more" className="w-full max-w-4xl p-6 mx-auto ">
      <h2 className="text-3xl mx-8  font-semibold text-center text-ff833f">
        Free TikTok Video Downloader
      </h2>
      <p className="mt-4 mx-8  text-center text-gray-300">
        TikTok video downloader is a free online service that helps you to
        download TikTok videos without watermark. You can access it on desktop
        PCs, smart phones (Android, iPhone), iPad and tablets. and save a video
        as a high-definition MP4 or MP3 of the best quality. Go to TikTok app or
        website, copy a video URL, and paste it to the above input box. Download
        a video of no watermark just with a few mouse clicks. The service is
        free, and imposes no limit on number of downloads. It is easy and safe
        since no software installation and registration are required.
      </p>

      <div className="mt-8 mx-8 flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold text-white">
          How to download TikTok without watermark?
        </h3>
        <ol className="mt-4 flex flex-col justify-center items-center gap-2 ">
          <li className="w-full">
            <h4 className="font-semibold fle text-gray-300">
              1. Find a TikTok video link
            </h4>
            <p className="text-gray-400 ms-3">
              Open TikTok, find a video and copy its URL.
            </p>
          </li>

          <li className="w-full">
            <h4 className="font-semibold fle text-gray-300">
              2. Paste the video URL
            </h4>
            <p className="text-gray-400 ms-3">
              Paste the video URL to the input box and click the "Download"
              button.
            </p>
          </li>
          <li className="w-full">
            <h4 className="font-semibold fle text-gray-300">
              3. Download the Video or Audio
            </h4>
            <p className="text-gray-400 ms-3">
              Click the "Download" buttons to save the video or audio.
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-8  mx-6">
        <Image
          width={800}
          height={400}
          src="/img/howto.jpg"
          alt="Features of TikTok Downloader"
          className="mx-auto aspect-video object-cover rounded-md shadow-md"
        />
      </div>

      <div className="mt-8  mx-6">
        <h3 className="text-xl font-semibold text-ff833f">Features:</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="text-ff833f">✓</span>
            <span className="ml-2 text-gray-300">
              No watermark for better quality, which most of the tools out there
              can't.
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-ff833f">✓</span>
            <span className="ml-2 text-gray-300">
              Download TikTok videos, Musically videos on any devices that you
              want: mobile, PC, or tablet. TikTok only allows users to download
              videos by its application and downloaded videos contain the
              watermark.
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-ff833f">✓</span>
            <span className="ml-2 text-gray-300">
              Download by using your browsers: I want to keep things simple for
              you. No need to download or install any software. I make an
              application for this purpose as well but you can only install
              whenever you like.
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-ff833f">✓</span>
            <span className="ml-2 text-gray-300">Easy to use</span>
          </li>
        </ul>
      </div>

      <div className="mt-8  mx-6">
        <h3 className="text-xl font-semibold text-ff833f">
          Frequently Asked Questions (FAQ):
        </h3>
        <ul className="mt-4 space-y-4">
          <li>
            <h4 className="font-semibold text-gray-300">
              Is this TikTok video downloader free to use?
            </h4>
            <p className="text-gray-400">
              Yes, our TikTok video downloader is completely free to use. You
              can download as many videos as you like without any cost.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-gray-300">
              Can I download TikTok videos without a watermark?
            </h4>
            <p className="text-gray-400">
              Absolutely! Our tool allows you to download TikTok videos without
              any watermarks.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-gray-300">
              Do I need to install any software to use this downloader?
            </h4>
            <p className="text-gray-400">
              No, you do not need to install any software. Our downloader works
              directly from your web browser.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LeanMore;
