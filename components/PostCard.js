import Link from 'next/link';
import Date from './Date';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';

export default function PostCard({ id, date, title, desc, tags }) {
	return (
		<div className='md:px-3 w-full md:w-2/4 mt-5 box-border group'>
			<Link href={`/posts/${id}`}>
				<a className='block w-full md:w-auto border-red border-2 rounded shadow-xl p-4 box-border'>
					<h1 className='text-xl font-bold text-red group-hover:underline'>
						{title}
					</h1>
					<div className='flex items-center space-x-1'>
						<p>
							<TodayOutlinedIcon fontSize='small' />
						</p>
						<Date dateString={date} />
					</div>
					<div className='w-full h-0.5 rounded-full bg-red my-2'></div>
					<p className='text-red-2'>{desc}</p>
					<div className='flex space-x-2 mt-5'>
						<p className='bg-red-3 text-red-2 py-1 px-2 rounded'>#{tags[0]}</p>
						<p
							className={`bg-red-3 text-red-2 py-1 px-2 rounded ${
								!tags[1] ? 'hidden' : ''
							}`}
						>
							#{!tags[1] ? '' : tags[1]}
						</p>
					</div>
				</a>
			</Link>
		</div>
	);
}
