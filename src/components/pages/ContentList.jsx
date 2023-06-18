const ContentList = ({ contents, title }) => {
	return (
		<div className='content-list'>
			<nav className='flex' aria-label='Breadcrumb'>
				<ol className='inline-flex items-center space-x-1 md:space-x-3'>
					<li className='inline-flex items-center'>
						<a
							href='#'
							className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
						>
							<svg
								aria-hidden='true'
								className='w-4 h-4 mr-2'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
							</svg>
							Home
						</a>
					</li>
					<li>
						<div className='flex items-center'>
							<svg
								aria-hidden='true'
								className='w-6 h-6 text-gray-400'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
									clip-rule='evenodd'
								></path>
							</svg>
							<a
								href='#'
								className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
							>
								Projects
							</a>
						</div>
					</li>
					<li aria-current='page'>
						<div className='flex items-center'>
							<svg
								aria-hidden='true'
								className='w-6 h-6 text-gray-400'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
									clipRule='evenodd'
								></path>
							</svg>
							<span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>
								{title}
							</span>
						</div>
					</li>
				</ol>
			</nav>
			{contents.map((content) => (
				<div
					className='max-w-2xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:g rid-cols-2 mb-20'
					key={content.id}
				>
					<div className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
						<h1 className='mt-1 text-lg font-semibold text-white lg:text-slate-900 md:text-2xl dark:sm:text-white'>
							{content.title}
						</h1>
						<p className='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>
							Author: {content.author}
						</p>
					</div>
					<div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
						<img
							src={content.image}
							alt=''
							className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full'
							loading='lazy'
						/>
						<img
							src={content.image_2}
							alt=''
							className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32'
							loading='lazy'
						/>
						<img
							src={content.image_3}
							alt=''
							className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32'
							loading='lazy'
						/>
					</div>
					<dl className='mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2'>
						<dt className='sr-only'>Reviews</dt>
						<dd className='text-indigo-600 flex items-center dark:text-indigo-400'>
							<svg
								width='24'
								height='24'
								fill='none'
								aria-hidden='true'
								className='mr-1 stroke-current dark:stroke-indigo-500'
							>
								<path
									d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>
								{content.rate}
								<span className='text-slate-400 font-normal'>
									({content.review})
								</span>
							</span>
						</dd>
						<dt className='sr-only'>Location</dt>
						<dd className='flex items-center'>
							<svg
								width='2'
								height='2'
								aria-hidden='true'
								fill='currentColor'
								className='mx-3 text-slate-300'
							>
								<circle cx='1' cy='1' r='1' />
							</svg>
							<svg
								width='24'
								height='24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='mr-1 text-slate-400 dark:text-slate-500'
								aria-hidden='true'
							>
								<path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
								<path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
							</svg>
							{content.location}
						</dd>
					</dl>
					<div className='mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
						<button
							type='button'
							className='bg-indigo-600 text-white text-sm
							leading-6 font-medium py-2 px-3 rounded-lg'
						>
							{' '}
							Check availability
						</button>
						<button
							type='button'
							className='bg-red-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg ml-5'
						>
							Delete
						</button>
					</div>
					<p className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400'>
						{content.desc}
					</p>
				</div>
			))}
		</div>
	);
};

export default ContentList;
