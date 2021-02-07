import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import { getSortedPostsData } from '../lib/posts';

export default function Posts({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Posts | Chawklate</title>
			</Head>
			<Navbar />
			<main className='container lg:px-60 mx-auto md:px-20 px-3 my-10'>
				<h1 className=' text-red lg:text-2xl text-xl font-black'>All Posts</h1>
				<div className='w-10 h-1 rounded-full w mt-3 bg-red-2'></div>
				<div className='flex flex-wrap mt-5 md:-mx-2 mx-auto'>
					{allPostsData.map(({ id, date, title, description, tags }) => (
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
			</main>
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
