import Navbar from "@/ui/components/navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/ui/components/footer";
import DownloadForm from "@/ui/components/download-form";
import LeanMore from "@/ui/sections/lean-more";

const page = () => {
  return (
    <>
      <main className="container mx-auto my-4">
        <Navbar />

        <section
          id="home"
          className="relative flex flex-col bg-black-950 bg-opacity-50 flex-1 z-20 justify-center items-center py-28 px-9 gap-10"
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <h1
              className="bg-gradient-reversed w-fit font-bold text-5xl inline-block text-center leading-2 
          tracking-wide text-transparent bg-clip-text max-w-[34rem]"
            >
              Download Tik Tok Video And Music by Link!
            </h1>
            <ul className="flex flex-row gap-6">
              <li className="flex items-center ">
                <span className="text-ff833f border border-white rounded-full aspect-square w-5 h-5 grid place-content-center">
                  ✓
                </span>
                <span className="ml-2 text-gray-300">No Watermark</span>
              </li>
              <li className="flex items-center ">
                <span className="text-ff833f border border-white rounded-full aspect-square w-5 h-5 grid place-content-center">
                  ✓
                </span>
                <span className="ml-2 text-gray-300">Fast and free</span>
              </li>
            </ul>
          </div>

          <DownloadForm />

          <Image src={"/img/graphic3.png"} alt="" width={775} height={454.4} />
        </section>

        <div className="absolute top-[35%] z-0  left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            className="blur rotate-6 w-[327px] h-[388px]"
            src={"/img/logos_tiktok-icon.png"}
            alt=""
            width={327}
            height={388.31}
          />
        </div>

        <LeanMore />
        <section className="w-full max-w-4xl p-6 mt-10 mx-auto ">
          <h3 className="text-2xl font-semibold text-center text-ff833f">
            Why Choose Our TikTok Downloader?
          </h3>
          <p className="mt-4 text-center text-gray-300">
            Our TikTok downloader stands out due to its ease of use, speed, and
            reliability. Join thousands of users who trust us for their TikTok
            video downloading needs.
          </p>

          <div className="mt-8  mx-6">
            <Image
              src="/img/Desktop-light.png"
              width={1440}
              height={1024}
              alt="Why Choose Us"
              className="mx-auto object-cover aspect-video max-w-[800px] bg-white rounded-md shadow-md"
            />
          </div>

          <ul className="mt-8  mx-6 space-y-4">
            <li className="flex items-start">
              <span className="text-ff833f">✓</span>
              <span className="ml-2 text-gray-300">
                Unlimited Downloads: Download as many TikTok videos as you want.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-ff833f">✓</span>
              <span className="ml-2 text-gray-300">
                High-Speed Downloads: Enjoy lightning-fast download speeds.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-ff833f">✓</span>
              <span className="ml-2 text-gray-300">
                Secure and Private: Your privacy is our top priority. No
                personal data is required.
              </span>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
