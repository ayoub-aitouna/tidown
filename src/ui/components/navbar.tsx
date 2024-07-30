import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className='fixed inset-0 container mx-auto my-8 z-30 flex flex-row justify-between items-center px-16 h-14 '>
			<a href='#home'>
				<div className='flex flex-row gap-2 justify-center items-center'>
					<Image
						className='w-[24px] h-[23.57px]'
						src={"/img/logos_tiktok-icon.png"}
						alt=''
						width={24}
						height={23}
					/>
					<h1 className='bg-gradient-primary font-bold text-xl inline-block text-transparent bg-clip-text'>
						TiDown
					</h1>
				</div>
			</a>
			<div className='flex-1'></div>
			<a href='#lean-more'>
				<div className='rounded text-black-950 p-2 w-32 h-9 bg-white grid place-content-center'>
					Learn More
				</div>
			</a>
		</div>
	);
};

export default Navbar;
