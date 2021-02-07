import Link from 'next/link';
import { withRouter } from 'next/router';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DeveloperBoardTwoToneIcon from '@material-ui/icons/DeveloperBoardTwoTone';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

function Navbar({ router }) {
	const navs = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Posts', href: '/posts' },
		{ name: 'About', href: '/about' },
	];
	return (
		<nav className='md:py-5 sticky top-0 bg-dark shadow-md z-10'>
			<div className='container lg:px-60 md:px-20 mx-auto md:flex md:items-center'>
				<Link href='/'>
					<a className='md:text-xl text-red hidden md:block' id='logo'>
						Chawklate
					</a>
				</Link>
				<ul className='ml-auto space-x-5 hidden md:flex lg:flex'>
					{navs.map((nav) => {
						return (
							<li key={nav.name}>
								<Link href={nav.href}>
									<a
										className={
											router.pathname == nav.href
												? 'hover:underline text-red font-bold'
												: 'hover:underline text-red-2'
										}
									>
										{nav.name}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
				<div className='md:hidden flex justify-between'>
					<Link href='/'>
						<a
							className={
								router.pathname == '/'
									? 'w-1/4 block bg-red p-3 text-center'
									: 'w-1/4 block p-3 text-center'
							}
						>
							<HomeTwoToneIcon
								color={router.pathname == '/' ? 'action' : 'secondary'}
								fontSize='large'
							/>
						</a>
					</Link>
					<Link href='/projects'>
						<a
							className={
								router.pathname == '/projects'
									? 'w-1/4 block bg-red p-3 text-center'
									: 'w-1/4 block p-3 text-center'
							}
						>
							<DeveloperBoardTwoToneIcon
								color={router.pathname == '/projects' ? 'action' : 'secondary'}
								fontSize='large'
							/>
						</a>
					</Link>
					<Link href='/posts'>
						<a
							className={
								router.pathname == '/posts'
									? 'w-1/4 block bg-red p-3 text-center'
									: 'w-1/4 block p-3 text-center'
							}
						>
							<LibraryBooksTwoToneIcon
								color={router.pathname == '/posts' ? 'action' : 'secondary'}
								fontSize='large'
							/>
						</a>
					</Link>
					<Link href='/about'>
						<a
							className={
								router.pathname == '/about'
									? 'w-1/4 block bg-red p-3 text-center'
									: 'w-1/4 block p-3 text-center'
							}
						>
							<AccountCircleTwoToneIcon
								color={router.pathname == '/about' ? 'action' : 'secondary'}
								fontSize='large'
							/>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default withRouter(Navbar);
