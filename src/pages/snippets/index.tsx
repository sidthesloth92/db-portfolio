import { motion } from 'framer-motion';
import Link from 'next/link';

import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';

const SNIPPETS = [
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
 * The snippets page of the application.
 */
const SnippetsPage: React.FC = () => {
  return (
    <Page>
      <PageHeader
        title="Snippets"
        description="A collection of copy paste times that do some standalone work on their
        own."
      />
      <PageBody>
        <motion.table
          className="table w-full"
          variants={tableContainerVariants}>
          <thead>
            <tr className="text-primary border-b border-dark-light">
              <th className="w-3/12 p-4 pb-8">Name</th>
              <th className="w-5/12 p-4 pb-8">Description</th>
              <th className="w-2/12 p-4 pb-8">Category</th>
              <th className="w-2/12 p-4 pb-8">Updated</th>
            </tr>
          </thead>

          <tbody>
            {SNIPPETS.map((snippet, index) => {
              return (
                <tr className="border-b border-dark-light" key={index}>
                  <td className="w-3/12 p-4 hover:text-primary">
                    <Link href="/snippets/[id]" as="/snippets/1">
                      <a>Date to JSON</a>
                    </Link>
                  </td>
                  <td className="w-5/12 p-4 ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do{' '}
                  </td>
                  <td className="w-2/12 p-4 text-center">JSON Typescript</td>
                  <td className="w-2/12 p-4 text-center">May 29, 2017</td>
                </tr>
              );
            })}
          </tbody>
        </motion.table>
      </PageBody>
    </Page>
  );
};

export default withPageTransition(SnippetsPage);
