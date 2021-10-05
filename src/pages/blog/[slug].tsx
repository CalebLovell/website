import { getAllPostsMeta, getPostBySlug } from '@utils/mdx';
import { MdxComponents } from '@components/MdxComponents';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { PageWrapper } from '@components/PageWrapper';
import { Blog } from 'pages/blog';

export const getStaticPaths = () => {
	const posts = getAllPostsMeta();
	const paths = posts.map(({ slug }) => ({ params: { slug } }));

	return {
		paths: paths,
		// Return 404 page if path is not returned by getStaticPaths
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async context => {
	const slug = context.params?.slug as string;
	const post = await getPostBySlug(slug);

	return { props: post };
};

export default function PostPage({ meta, code }: { meta: Blog; code: any }) {
	// This is a bit weird, but this is how mdx-bundler recommends it.
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<PageWrapper>
			<div className='flex flex-col items-center w-full'>
				<article className='flex flex-col items-center max-w-4xl p-10 my-4 bg-gray-800 rounded-md'>
					<header className='w-full mb-4 space-y-4'>
						<h1 className='text-3xl font-extrabold tracking-tight text-center text-gray-200 sm:text-4xl'>{meta.title}</h1>
						<h2 className='text-lg text-center text-gray-400'>{meta.description}</h2>
						<div className='flex flex-col w-full'>
							<div className='overflow-hidden rounded-md text-[0px]'>
								<Image
									src={`/${meta.image.url}`}
									width={1920}
									height={960}
									alt={meta.image.alt}
									placeholder='blur'
									blurDataURL={`/${meta.image.url}`}
								/>
							</div>
						</div>
					</header>
					<main className='w-full text-gray-200'>
						<Component components={MdxComponents} />
					</main>
					<footer className='flex flex-row items-center justify-between w-full text-sm'>
						<div className='flex flex-row items-center text-gray-200'>
							<Image src='/profile.jpg' height={30} width={30} className='object-cover rounded-full' />
							<p>
								&nbsp;&nbsp;By Caleb Lovell
								<time dateTime={meta.publishedAt} title={meta.publishedAt}>
									&nbsp;&middot;&nbsp;{meta.publishedAt}
								</time>
							</p>
						</div>
						<a
							href={`https://github.com/CalebLovell/website/blob/main/posts/${meta.slug}.mdx`}
							target='_blank'
							rel='noreferrer'
							className='p-2 text-gray-200 border-2 border-gray-200 rounded-md hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-gray-800'
						>
							View This Post&apos;s Source Code Here
						</a>
					</footer>
				</article>
			</div>
		</PageWrapper>
	);
}
