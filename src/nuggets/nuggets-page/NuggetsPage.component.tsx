import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import { NuggetsPageProps } from '../../pages/nuggets';
import { useNuggets } from './NuggetsPage.hooks';

/**
 * Animation variants for the table container.
 */
const tableContainerVariants = {
  initial: {
    transform: 'translateY(100%)',
    opacity: 0
  },
  enter: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * The nuggets page of the application.
 */
const NuggetsPage: React.FC<NuggetsPageProps> = ({
  nuggets: initialNuggets = []
}) => {
  const {
    query: { tag = '' }
  } = useRouter();

  const [nuggets, hasMore, fetchMoreNuggets] = useNuggets(
    initialNuggets,
    String(tag)
  );

  return (
    <Page>
      <PageHeader
        title="Nuggets"
        description="A collection of copy paste times that do some standalone work on their
        own."
      />
      <PageBody>
        <motion.table
          className="table w-full"
          variants={tableContainerVariants}>
          <thead className="hidden md:table-header-group">
            <tr className="text-primary border-b border-dark-light">
              <th className="w-3/12 p-4 pb-8">Name</th>
              <th className="w-5/12 p-4 pb-8">Description</th>
              <th className="w-2/12 p-4 pb-8">Category</th>
              <th className="w-2/12 p-4 pb-8">Updated</th>
            </tr>
          </thead>

          <tbody>
            {nuggets &&
              nuggets.map((nugget, index) => {
                return (
                  <tr
                    className="flex flex-wrap md:table-row bg-dark-tint md:bg-dark p-2 md:p-0 my-6 lg:my-0 rounded border-b-2 border-secondary-text md:border-b md:border-dark-light "
                    key={index}>
                    <td className="w-full md:w-3/12 p-2 md:py-4 md:px-2 lg:p-4 text-secondary-text md:md:text-primary font-bold text-lg">
                      <Link
                        href="/nuggets/[id]/[slug]"
                        as={`/nuggets/${nugget.id}/${nugget.slug}`}>
                        <a className="ul-hover-effect">{nugget.title}</a>
                      </Link>
                    </td>
                    <td className="w-full md:w-5/12 pb-2 px-2 md:py-4 md:px-2 lg:p-4">
                      {nugget.description}
                    </td>
                    <td className="w-2/3 md:w-2/12 pb-2 px-2 md:py-4 md:px-2 lg:p-4 text-sm text-secondary font-bold  md:text-center">
                      {nugget.tag_list &&
                        nugget.tag_list.map((tag) => {
                          return (
                            <Link
                              key={tag}
                              href="/nuggets/tag/[tag]"
                              as={`/nuggets/tag/${tag}`}>
                              <a className="inline-block pr-2">#{tag}</a>
                            </Link>
                          );
                        })}
                    </td>
                    <td className="w-1/3 md:w-2/12 pb-2 px-2 md:py-4 md:px-2 lg:p-4 text-sm text-secondary md:text-white md:text-base font-bold md:font-normal md:text-center ">
                      {new Date(
                        nugget.published_timestamp
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </motion.table>
      </PageBody>
    </Page>
  );
};

export default NuggetsPage;
