import { motion } from 'framer-motion';
import Link from 'next/link';

import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';

const NUGGETS = [
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  },
  {
    name: 'Date to JSON',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do',
    category: 'JSON, Typescript',
    updated: 'May 29, 2017'
  }
];

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
const NuggetsPage: React.FC = () => {
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
            {NUGGETS.map((snippet, index) => {
              return (
                <tr
                  className="flex flex-wrap md:table-row bg-dark-tint md:bg-dark p-2 md:p-0 my-6 lg:my-0 rounded border-b-2 border-secondary-text md:border-b md:border-dark-light "
                  key={index}>
                  <td className="w-full md:w-3/12 p-2 md:py-4 md:px-2 lg:p-4 text-secondary-text md:md:text-primary font-bold text-lg">
                    <Link href="/nuggets/[id]" as="/nuggets/1">
                      <a className="ul-hover-effect">Date to JSON</a>
                    </Link>
                  </td>
                  <td className="w-full md:w-5/12 pb-2 px-2 md:py-4 md:px-2 lg:p-4 ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do{' '}
                  </td>
                  <td className="w-1/2 md:w-2/12 pb-2 px-2 md:py-4 md:px-2 lg:p-4 text-sm text-secondary font-bold  md:text-center">
                    JSON, Typescript
                  </td>
                  <td className="w-1/2 md:w-2/12 pb-2 px-2 md:py-4 md:px-2 lg:p-4 text-sm text-secondary md:text-white md:text-base font-bold md:font-normal md:text-center ">
                    May 29, 2017
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

export default withPageTransition(NuggetsPage);
