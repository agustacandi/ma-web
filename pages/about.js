import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function About() {
	return (
		<>
			<Head>
				<title>About | Chawklate</title>
			</Head>
			<Navbar />
			<main className='container lg:px-60 mx-auto md:px-20 px-3 my-10'>
				<h1 className=' text-red lg:text-2xl text-xl font-black'>About Me</h1>
				<div className='w-10 h-1 rounded-full w mt-3 bg-red-2'></div>
				<p className='mt-8'>
					Halo nama saya Candi Agusta Islamiano. Saya lahir pada tanggal 13 Juli
					2002 dan saat ini berumur 18 tahun. Saya sekolah di SMKN 1 Bondowoso
					dengan paket keahlian TKJ (Tekhnik Komputer Jaringan). Oke cukup,
					terus Chawklate siapa? Chawklate itu cuma username saya dan pelesetan
					dari kata Chocolate. Saya pakai kata ini karena... ya saya suka
					coklat.
				</p>
				<h1 className=' text-red lg:text-2xl text-xl font-black mt-5'>Hobby</h1>
				<div className='w-10 h-1 rounded-full w mt-3 bg-red-2'></div>
				<p className='mt-8'>
					Berbicara tentang hobi, saya suka bermain-main dengan pemrograman
					komputer. Disaat mulai mumet saya biasanya mendengarkan musik,
					favorite saya adalah Sawano Hiroyuki, Twice, dan Baby Metal.{' '}
					<s> Kadang juga menonton Anime tapi tidak sesering saat SMP xd </s>.
					Untuk bahasa pemrograman, saat ini saya fokus di bahasa JavaScript.
				</p>
				<h1 className=' text-red lg:text-2xl text-xl font-black mt-5'>
					Let's Connect
				</h1>
				<div className='w-10 h-1 rounded-full w mt-3 bg-red-2'></div>
				<ul className='mt-8'>
					<li>
						<a className='hover:underline' href='https://github.com/Chawklate'>
							GitHub
						</a>
					</li>
					<li>
						<a className='hover:underline' href='https://t.me/Chawklate'>
							Telegram
						</a>
					</li>
					<li>
						<a
							className='hover:underline'
							href='https://twitter.com/agustachan'
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							className='hover:underline'
							href='https://instagram.com/agustarattata'
						>
							Instagram
						</a>
					</li>
				</ul>
			</main>
			<Footer />
		</>
	);
}
