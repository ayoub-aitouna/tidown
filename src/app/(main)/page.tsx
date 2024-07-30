import Navbar from "@/ui/components/navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/ui/components/footer";

const page = () => {
	return (
		<>
			<Head>
				<title>TikTok Video Downloader | Free & Fast Download</title>
				<meta
					name='description'
					content='Download TikTok videos quickly and easily with our free TikTok Video Downloader. No watermarks, high quality.'
				/>
				<meta
					name='keywords'
					content='TikTok video downloader, free TikTok download, TikTok no watermark, download TikTok videos, TikTok downloader online'
				/>
			</Head>

			<main className='container mx-auto my-4'>
				<Navbar />

				<section
					id='home'
					className='relative flex flex-col flex-1 z-20 justify-center items-center py-28 px-9 gap-10'>
					<div className='flex flex-col justify-center items-center gap-5'>
						<h1
							className='bg-gradient-reversed w-fit font-bold text-5xl inline-block text-center leading-2 
          tracking-wide text-transparent bg-clip-text max-w-[30rem]'>
							Download Tik Tok Video by Link!
						</h1>
						<ul className='flex flex-row gap-6'>
							<li className='flex items-center '>
								<span className='text-ff833f border border-white rounded-full aspect-square w-5 h-5 grid place-content-center'>
									✓
								</span>
								<span className='ml-2 text-gray-300'>No Watermark</span>
							</li>
							<li className='flex items-center '>
								<span className='text-ff833f border border-white rounded-full aspect-square w-5 h-5 grid place-content-center'>
									✓
								</span>
								<span className='ml-2 text-gray-300'>Fast and free</span>
							</li>
						</ul>
					</div>

					<form className='rounded-2xl p-2 w-full max-w-[700px] md:h-16 outline outline-white outline-1  text-black-950 flex flex-col md:flex-row justify-center items-center gap-2 px-4'>
						<input
							type='text'
							className='flex-1 h-16 md:h-full bg-transparent outline-none  text-white rounded-xl'
							placeholder='Copy TikTok video link'
						/>
						<button
							className='rounded p-2 w-full md:w-32 h-9 bg-crusta-400 text-white grid place-content-center'
							type='submit'>
							Download
						</button>
					</form>
					<Image src={"/img/graphic3.png"} alt='' width={775} height={454.4} />
				</section>
				<div className='absolute top-[35%] z-0  left-[50%] translate-x-[-50%] translate-y-[-50%]'>
					<Image
						className='blur rotate-6 w-[327px] h-[388px]'
						src={"/img/logos_tiktok-icon.png"}
						alt=''
						width={327}
						height={388.31}
					/>
				</div>

				<section id='lean-more' className='w-full max-w-4xl p-6 mx-auto '>
					<h2 className='text-3xl font-semibold text-center text-ff833f'>
						Free TikTok Video Downloader
					</h2>
					<p className='mt-4 text-center text-gray-300'>
						Easily download TikTok videos without watermarks. Just paste the
						video link and click 'Download'.
					</p>

					<div className='mt-8  mx-6'>
						<img
							src='https://via.placeholder.com/800x400'
							alt='Downloading TikTok Video'
							className='mx-auto rounded-md shadow-md'
						/>
					</div>

					<div className='mt-8  mx-6'>
						<h3 className='text-xl font-semibold text-ff833f'>How to Use:</h3>
						<ol className='mt-4  space-y-2'>
							<li className='flex items-start'>
								<span className='text-ff833f'>1.</span>
								<span className='ml-2 text-gray-300'>
									Copy the TikTok video link.
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-ff833f'>2.</span>
								<span className='ml-2 text-gray-300'>
									Paste the link in the input field above.
								</span>
							</li>
							<li className='flex items-start'>
								<span className='text-ff833f'>3.</span>
								<span className='ml-2 text-gray-300'>
									Click 'Download' and wait for the download to complete.
								</span>
							</li>
						</ol>
					</div>

					<div className='mt-8  mx-6'>
						<img
							src='https://via.placeholder.com/800x400'
							alt='Features of TikTok Downloader'
							className='mx-auto rounded-md shadow-md'
						/>
					</div>

					<div className='mt-8  mx-6'>
						<h3 className='text-xl font-semibold text-ff833f'>Features:</h3>
						<ul className='mt-4 space-y-2'>
							<li className='flex items-center'>
								<span className='text-ff833f'>✓</span>
								<span className='ml-2 text-gray-300'>No watermark</span>
							</li>
							<li className='flex items-center'>
								<span className='text-ff833f'>✓</span>
								<span className='ml-2 text-gray-300'>
									High-quality downloads
								</span>
							</li>
							<li className='flex items-center'>
								<span className='text-ff833f'>✓</span>
								<span className='ml-2 text-gray-300'>Fast and free</span>
							</li>
							<li className='flex items-center'>
								<span className='text-ff833f'>✓</span>
								<span className='ml-2 text-gray-300'>Easy to use</span>
							</li>
						</ul>
					</div>

					<div className='mt-8  mx-6'>
						<img
							src='https://via.placeholder.com/800x400'
							alt='FAQ about TikTok Downloader'
							className='mx-auto rounded-md shadow-md'
						/>
					</div>

					<div className='mt-8  mx-6'>
						<h3 className='text-xl font-semibold text-ff833f'>
							Frequently Asked Questions (FAQ):
						</h3>
						<ul className='mt-4 space-y-4'>
							<li>
								<h4 className='font-semibold text-gray-300'>
									Is this TikTok video downloader free to use?
								</h4>
								<p className='text-gray-400'>
									Yes, our TikTok video downloader is completely free to use.
									You can download as many videos as you like without any cost.
								</p>
							</li>
							<li>
								<h4 className='font-semibold text-gray-300'>
									Can I download TikTok videos without a watermark?
								</h4>
								<p className='text-gray-400'>
									Absolutely! Our tool allows you to download TikTok videos
									without any watermarks.
								</p>
							</li>
							<li>
								<h4 className='font-semibold text-gray-300'>
									Do I need to install any software to use this downloader?
								</h4>
								<p className='text-gray-400'>
									No, you do not need to install any software. Our downloader
									works directly from your web browser.
								</p>
							</li>
						</ul>
					</div>
				</section>

				<section className='w-full max-w-4xl p-6 mt-10 mx-auto '>
					<h3 className='text-2xl font-semibold text-center text-ff833f'>
						Why Choose Our TikTok Downloader?
					</h3>
					<p className='mt-4 text-center text-gray-300'>
						Our TikTok downloader stands out due to its ease of use, speed, and
						reliability. Join thousands of users who trust us for their TikTok
						video downloading needs.
					</p>

					<div className='mt-8  mx-6'>
						<img
							src='https://via.placeholder.com/800x400'
							alt='Why Choose Us'
							className='mx-auto rounded-md shadow-md'
						/>
					</div>

					<ul className='mt-8  mx-6 space-y-4'>
						<li className='flex items-start'>
							<span className='text-ff833f'>✓</span>
							<span className='ml-2 text-gray-300'>
								Unlimited Downloads: Download as many TikTok videos as you want.
							</span>
						</li>
						<li className='flex items-start'>
							<span className='text-ff833f'>✓</span>
							<span className='ml-2 text-gray-300'>
								High-Speed Downloads: Enjoy lightning-fast download speeds.
							</span>
						</li>
						<li className='flex items-start'>
							<span className='text-ff833f'>✓</span>
							<span className='ml-2 text-gray-300'>
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
