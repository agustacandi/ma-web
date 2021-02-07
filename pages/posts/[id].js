import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ScrollBar from '../../components/ScrollBar';
import Footer from '../../components/Footer';

export default function Post({ postData }) {
	return (
		<>
			<Head>
				<title>{postData.title} | Chawklate</title>
			</Head>
			<nav className='md:py-3 sticky top-0 bg-dark shadow-md z-10'>
				<div className='container lg:px-60 md:px-20 mx-auto flex items-center justify-between px-3 py-2 md:py-0'>
					<Link href='/posts'>
						<a>
							<p className='text-red'>
								<ArrowBackIosOutlinedIcon />
							</p>
						</a>
					</Link>
					<Link href='/'>
						<a className='md:text-xl text-red text-sm' id='logo'>
							Chawklate
						</a>
					</Link>
					<img
						src='/assets/images/profile.jpg'
						alt='profile'
						className='h-10 w-10 rounded-full border-red border-2'
					/>
				</div>
			</nav>
			<ScrollBar />
			<article className='container lg:px-60 md:px-20 mx-auto my-10 px-3'>
				<h1 className='text-xl md:text-2xl font-black text-red'>
					{postData.title}
				</h1>
				<div className='flex space-x-1 items-center'>
					<p className='text-xs items-center flex space-x-1'>
						<AccountCircleOutlinedIcon fontSize='small' />
						<a href='#'>Chawklate</a>
					</p>
					<p>|</p>
					<div className='flex items-center space-x-1'>
						<p>
							<TodayOutlinedIcon fontSize='small' />
						</p>
						<Date dateString={postData.date} />
					</div>
				</div>
				<LazyLoadImage
					src={
						!postData.images ? '/assets/images/spinner.svg' : postData.images
					}
					alt={postData.title}
					effect='blur'
					className={
						!postData.images
							? 'animate-spin w-10 h-10'
							: 'w-full md:h-full object-contain'
					}
				/>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
			<Footer />
		</>
	);
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
