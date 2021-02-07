import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import { getSortedPostsData } from '../lib/posts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Home({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Home | Chawklate</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<header className='container lg:px-60 mx-auto mt-10 md:flex md:items-center md:px-20 px-3'>
				<div className='md:1/2'>
					<LazyLoadImage
						effect='blur'
						src='/assets/images/profile.jpg'
						alt='Profile Image'
						className='w-32 h-32 mx-auto md:w-60 md:h-60 rounded-full border-8 border-red shadow-lg hover:border-red-3'
					/>
				</div>
				<div className='md:ml-auto md:w-1/2'>
					<h1 className='text-red-2 font-bold md:text-xl lg:text-2xl text-center md:text-left mt-4 md:mt-0'>
						こんにちは。
					</h1>
					<p className='lg:text-4xl md:text-2xl text-xl font-black text-red text-center md:text-left'>
						Saya Candi Agusta.
					</p>
					<p className='text-red-2 text-justify md:text-left'>
						Seorang pelajar biasa yang aktif dibidang IT. Suka belajar hal baru,
						membaca Manga atau Novel, menonton Anime, dan Linux Stuff.
					</p>
					<p className='text-red mt-4 font-bold text-center md:text-left'>
						Skills
					</p>
					<div className='flex items-center space-x-2 justify-center md:justify-start'>
						<LazyLoadImage
							effect='blur'
							src='/assets/images/react.png'
							alt='React Icon'
							className='w-10 h-10 object-cover'
						/>
						<LazyLoadImage
							effect='blur'
							src='/assets/images/nextjs.png'
							alt='NextJS Icon'
							className='h-8 object-contain'
						/>
						<LazyLoadImage
							effect='blur'
							src='/assets/images/nodejs.png'
							alt='NodeJS Icon'
							className='w-8 h-8 object-contain'
						/>
						<LazyLoadImage
							effect='blur'
							src='/assets/images/javascript.png'
							alt='JavaScript Icon'
							className='w-8 h-8 object-contain'
						/>
						<LazyLoadImage
							effect='blur'
							src='/assets/images/python.png'
							alt='Python Icon'
							className='w-8 h-8 object-contain'
						/>
						<LazyLoadImage
							effect='blur'
							src='/assets/images/figma.svg'
							alt='Figma Icon'
							className='w-8 h-8 object-contain'
						/>
					</div>
				</div>
			</header>
			<section className='container lg:px-60 mx-auto md:px-20 px-3 mt-14 mb-10'>
				<h1 className=' text-red lg:text-2xl text-xl font-black'>
					Recent Posts
				</h1>
				<div className='w-10 h-1 rounded-full w mt-3 bg-red-2'></div>
				<div className='flex flex-wrap mt-5 md:-mx-2 mx-auto'>
					{allPostsData
						.slice(0, 4)
						.map(({ id, date, title, description, tags }) => (
							<PostCard
								id={id}
								date={date}
								title={title}
								key={id}
								desc={description}
								tags={tags}
							/>
						))}
				</div>
			</section>
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
