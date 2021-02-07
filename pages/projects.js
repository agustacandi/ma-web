import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects | Chawklate</title>
			</Head>
			<Navbar />
			<main className='container lg:px-60 mx-auto md:px-20 px-3 my-10'>
				<h1 className=' text-red lg:text-2xl text-xl font-black'>
					My Projects
				</h1>
				<div className='w-10 h-1 rounded-full w mt-3 bg-red-2'></div>
				<div className='flex flex-wrap mt-5 md:-mx-2 mx-auto'>
					<ProjectCard
						title='Anikugo'
						desc='Web App untuk mencari Anime, dibuat menggunakan ReactJS dan Jikan API'
						image='/assets/projects/anikugo.png'
					/>
					<ProjectCard
						title='FoodMarket'
						desc='Aplikasi mobile untuk memesan makanan, dibuat menggunakan React Native dan Laravel'
						image='/assets/projects/ramen.webp'
					/>
				</div>
			</main>
			<Footer />
		</>
	);
}
