// import { motion } from 'framer-motion';
// import {
//   GetStaticPaths,
//   GetStaticPathsResult,
//   GetStaticPropsResult
// } from 'next';
// import Head from 'next/head';
// import Link from 'next/link';
// import React from 'react';

// import withPageTransition from '../../../components/hoc/with-page-transition';
// import MdContent from '../../../components/md-content/MdContent';
// import PageBody from '../../../components/page-body/PageBody';
// import Page from '../../../components/page/Page';
// import SocialShare from '../../../components/social-share/SocialShare.component';
// import { formatDate } from '../../../lib';
// import { Nugget } from '../../../models/Nugget';
// import ShareSection from '../../../posts/share-section/ShareSection.component';
// import { getNuggets } from '../../api/nuggets';
// import { getNuggetById } from '../../api/nuggets/[id]';

// /**
//  * Placeholder animation variant for the header section.
//  */
// const headerVariants = {
//   initial: {
//     opacity: 0
//   },
//   enter: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       when: 'beforeChildren'
//     }
//   }
// };

// /**
//  * Animation variants for the header children.
//  */
// export const headerChildrenVariants = {
//   initial: {
//     opacity: 0,
//     transform: 'translateY(50%)'
//   },
//   enter: {
//     opacity: 1,
//     transform: 'translateY(0%)',
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut'
//     }
//   }
// };

// /**
//  * Animation variants for the line after header.
//  */
// const hrVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0
//   },
//   enter: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delay: 1.2,
//       duration: 1,
//       ease: 'easeOut'
//     }
//   }
// };

// /**
//  * Animation variants for the page content.
//  */
// const nuggetContentVariants = {
//   initial: {
//     opacity: 0,
//     transform: 'translateY(2%)'
//   },
//   enter: {
//     opacity: 1,
//     transform: 'translateY(0%)',
//     transition: {
//       delay: 1.2,
//       duration: 1,
//       ease: 'easeOut'
//     }
//   }
// };

// export const getStaticPaths: GetStaticPaths = async (): Promise<
//   GetStaticPathsResult<any>
// > => {
//   try {
//     console.log('\nRunning getStaticPaths for nuggets/[id]/[slug]');
//     const nuggets = await getNuggets({
//       per_page: '50'
//     });

//     const paths = nuggets.map((nugget) => ({
//       params: {
//         id: String(nugget.id),
//         slug: nugget.slug
//       }
//     }));

//     console.log('\nNumber of nuggets pre-rendered: ', nuggets.length);

//     return {
//       paths,
//       fallback: true
//     };
//   } catch (e) {
//     console.error('Error while fetching static paths for nuggets: ', e);
//   }
// };

// /**
//  * Props for {@link NuggetPage}.
//  */
// interface NuggetPageProps {
//   /**
//    * Nugget for the page.
//    */
//   nugget: Nugget;
// }

// export const getStaticProps = async ({
//   params
// }: Record<any, any>): Promise<GetStaticPropsResult<NuggetPageProps>> => {
//   try {
//     console.log('\nRunning getStaticProps for nugget with id: ', params.id);
//     const nugget = await getNuggetById(params.id);
//     nugget.body_markdown = nugget.body_markdown.substring(
//       nugget.body_markdown.lastIndexOf(nugget.description.substring(0, 10))
//     );
//     return {
//       props: {
//         nugget
//       },
//       revalidate: 300
//     };
//   } catch (e) {
//     console.error(
//       'Error while fetching getStaticProps nugget by id: ',
//       params.id,
//       e
//     );
//   }
// };

// /**
//  * Represents a page for a single instance of a nugget.
//  */
// const NuggetPage: React.FC<NuggetPageProps> = ({ nugget = {} }) => {
//   return (
//     <Page>
//       <Head>
//         <title>{nugget.title}</title>
//         <meta property="og:title" content={nugget.title} />
//         <meta property="og:type" content="article" />
//         <meta
//           property="og:url"
//           content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/nuggets/${nugget.id}/${nugget.slug}`}
//         />

//         <meta name="twitter:title" content={nugget.title} />
//         <meta name="twitter:description" content={nugget.description} />
//       </Head>
//       <motion.div
//         className="text-center mb-8 lg:mb-16 overflow-hidden"
//         variants={headerVariants}>
//         <motion.h1
//           className="font-black text-primary mb-4 leading-tight"
//           variants={headerChildrenVariants}>
//           {nugget.title}
//         </motion.h1>
//         <motion.div
//           className="font-bold text-lg lg:text-xl text-secondary"
//           variants={headerChildrenVariants}>
//           <span>{formatDate(nugget.published_timestamp)}</span>
//           <span className="px-2">•</span>
//           <span>{nugget.readingTime}</span>
//         </motion.div>
//         <motion.div
//           className="text-secondary-text text-md lg:text-lg mb-2 font-bold"
//           variants={headerChildrenVariants}>
//           {nugget.tag_list &&
//             nugget.tag_list.map((tag) => {
//               return (
//                 <Link
//                   key={tag}
//                   href="/nuggets/tag/[tag]"
//                   as={`/nuggets/tag/${tag}`}>
//                   <a className="inline-block ul-hover-effect mr-2">#{tag}</a>
//                 </Link>
//               );
//             })}
//         </motion.div>
//         <motion.div
//           className="flex justify-center"
//           variants={headerChildrenVariants}>
//           <SocialShare
//             item={nugget}
//             url={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/nuggets/${nugget.id}/${nugget.slug}`}
//           />
//         </motion.div>
//       </motion.div>

//       <PageBody>
//         <motion.div
//           className="bg-dark-light sm: mb-8"
//           style={{ height: '1px' }}
//           variants={hrVariants}
//         />
//         <motion.div variants={nuggetContentVariants}>
//           <MdContent>{nugget.body_markdown}</MdContent>
//         </motion.div>

//         <ShareSection item={nugget} />
//       </PageBody>
//     </Page>
//   );
// };

// export default withPageTransition(NuggetPage);
