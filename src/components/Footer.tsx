const socials = [
	{
		title: `Twitter`,
		href: `https://twitter.com/Caleb__Lovell`,
		svg: (
			<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
				<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
			</svg>
		),
	},
	{
		title: `GitHub`,
		href: `https://github.com/CalebLovell`,
		svg: (
			<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
				<path
					fillRule='evenodd'
					d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
					clipRule='evenodd'
				/>
			</svg>
		),
	},
	{
		title: `LinkedIn`,
		href: `https://www.linkedin.com/in/caleblovell/`,
		svg: (
			<svg
				className='w-6 h-6'
				fill='currentColor'
				aria-hidden='true'
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
			>
				<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
			</svg>
		),
	},
];

export const Footer = () => {
	return (
		<footer className='flex flex-col items-center w-full p-5 space-y-6 max-w-7xl'>
			<div className='flex flex-col w-full justify-evenly md:flex-row md:items-center md:justify-between'>
				<p className='hidden text-base text-center text-gray-200 md:block'>
					Built with Next.js, TailwindCSS and MDX.
					<a
						href='https://github.com/CalebLovell/website'
						className='p-1 text-red-500 rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-gray-800'
						target='_blank'
						rel='noreferrer'
					>
						Click here
					</a>
					to see the code!
				</p>
				<div className='flex items-center justify-center mt-4 space-x-6 md:mt-0'>
					{socials.map(x => (
						<a
							key={x.title}
							href={x.href}
							className='p-2 text-gray-200 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
							target='_blank'
							rel='noreferrer'
						>
							<span className='sr-only'>{x.title}</span>
							{x.svg}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};
