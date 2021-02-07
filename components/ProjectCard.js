export default function ProjectCard({ title, desc, image }) {
	return (
		<div className='md:px-3 w-full md:w-2/4 mt-5 box-border'>
			<a className='block w-full md:w-auto border-red border-2 rounded shadow-xl p-4 box-border'>
				<img
					src={image}
					alt={title}
					className='md:h-60 h-44 w-full rounded object-cover'
				/>
				<h1 className='text-xl font-bold text-red mt-4'>{title}</h1>
				<div className='w-full h-0.5 rounded-full bg-red my-2'></div>
				<p className='text-red-2'>{desc}</p>
				<div className='flex space-x-2 mt-5'>
					<p className='bg-red-3 text-red-2 py-1 px-2 rounded'>
						Coming Soon...
					</p>
				</div>
			</a>
		</div>
	);
}
