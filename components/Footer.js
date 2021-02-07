import React from 'react';

function Footer() {
	return (
		<div className='my-5'>
			<p className='text-center text-red-2'>
				Powered by{' '}
				<strong>
					<a href='https://nextjs.org' className='hover:underline'>
						NextJS
					</a>
				</strong>{' '}
				and{' '}
				<strong>
					<a href='https://vercel.com' className='hover:underline'>
						Vercel
					</a>
				</strong>
			</p>
			<p className='text-center text-red-2'>
				Copyright © 2021{' '}
				<strong>
					<a href='https://github.com/Chawklate' className='hover:underline'>
						Chawklate
					</a>
				</strong>
			</p>
		</div>
	);
}

export default Footer;
