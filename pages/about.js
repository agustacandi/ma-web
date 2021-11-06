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
		{/*<p className='mt-8 '>
					Halo, saya Candi Agusta Islami Ano. Saya hanya pelajar biasa yang bisa
					ditemukan dimanapun. Sekarang saya berumur 18 tahun dan duduk di kelas
					12 SMK. Saya di SMK memilih jurusan TKJ walau passion saya sebenarnya
					ada di pemrograman. Kenapa ga masuk RPL aja? Ya... banyak yang bilang
					gitu sih, tapi saya masuk TKJ karena ingin belajar hal baru. Dan saya
					yakin belajar pemrograman secara otodidak pasti bisa. Saya pertama
					kali belajar pemrograman web pada tahun 2019 saat magang di waktu
					luang. Selain punya hard skill di jaringan dan pemrograman, saya juga
					bisa sedikit design vektor atau user interface web/mobile app.
				</p>
				<p className='mt-5'>
					Saya saat ini fokus belajar di bahasa pemrograman JavaScript dan
					Python. Saya menggunakan OS GNU/Linux dengan kustomisasi desktop
					racikan sendiri untuk penggunaan sehari-hari. Oh iya, di web ini
					nantinya saya akan berbagi pengetahuan dan pengalaman saya. Saya
					berharap, apa yang saya bagikan bermanfaat untuk semua orang.
				</p>
				<p className='mt-5'>
					Terus Chawklate itu siapa? Chawklate itu cuma online alias atau
					username saja. Chawklate itu pelesetan dari kata Chocolate. Saya pake
					kata ini karena ya... saya suka coklat :p. Kalau mau tanya-tanya
					tentang pemrograman web, ingin berteman atau yang lainnya bebas bisa
					contact saya di{' '}
					<a href='https://t.me/Chawklate' className='text-red'>
						Telegram
					</a>{' '}
					atau bisa mengirim{' '}
					<a href='mailto:chawklat3@pm.me' className='text-red'>
						Email
					</a>
					.
				</p>
				<details className='mt-5'>
					<summary className='text-red-2 cursor-pointer hover:underline'>
						Fun Fact &#40; klik aja kalo kepo xd &#41;
					</summary>
					<p>
						Saya adalah tipe orang yang ambisius. Sangat suka di tempat yang
						tenang karena itu membuat saya fokus untuk ngoding/belajar dan takut
						tokek, cicak dan kodok &#40; maaf phobia :&#40; &#41;
					</p>
					<p className='mt-5'>
						Kalo lagi mumet, saya suka dengerin musik dan nonton anime atau baca
						manga. Untuk genre musik bebas, selama enak didengar why not? Tapi
						yang paling favorite adalah Sawano Hiroyuki, TWICE dan Babymetal.
					</p>
					<p className='mt-5'>
						Sedangkan untuk anime, saat ini saya lebih suka genre SoL &#40;
						Slice of Life &#41; atau genre comedy seperti Grand Blue, Saiki
						Kusuo dan <s>Prison School.</s> Anime favorite tetap Attack on
						Titan, One Piece, Yakusoku no Neverland, Hunter X Hunter dan
						Steins;Gate.
					</p>
					<p className='mt-5'>
						Manga?? Berserk the best. Mau anime atau manga yang penting ada plot
						twist nya yang uwahhh saya suka &#40; lebih gurih hehe, dan ini ada
						di Yakusoku no Neverland &#41;.
					</p>
					<p className='mt-5'>Game? Saya sudah tidak nge-game lagi :)</p>
				</details> */}
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
					<li>
						<p>Discord (Agusta#7777)</p>
					</li>
				</ul>
			</main>
			<Footer />
		</>
	);
}
