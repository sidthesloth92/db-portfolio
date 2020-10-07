import Link from 'next/link';

import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';

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
        <table className="table w-full">
          <thead>
            <tr className="text-primary">
              <th className="w-3/12 p-4 pb-8 border-b border-dark-light">
                Name
              </th>
              <th className="w-5/12 p-4 pb-8 border-b border-dark-light">
                Category
              </th>
              <th className="w-2/12 p-4 pb-8 border-b border-dark-light">
                Updated
              </th>
              <th className="w-2/12 p-4 pb-8 border-b border-dark-light">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light  hover:text-primary">
                <Link href="/snippets/id">
                  <a>Date to JSON</a>
                </Link>
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4 border-b border-dark-light">
                Date to JSON
              </td>
              <td className="w-5/12 p-4 border-b border-dark-light">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                JSON Typescript
              </td>
              <td className="w-2/12 p-4 border-b border-dark-light text-center">
                May 29, 2017
              </td>
            </tr>
            <tr>
              <td className="w-3/12 p-4">Date to JSON</td>
              <td className="w-5/12 p-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{' '}
              </td>
              <td className="w-2/12 p-4 text-center">JSON Typescript</td>
              <td className="w-2/12 p-4 text-center">May 29, 2017</td>
            </tr>
          </tbody>
        </table>
      </PageBody>
    </Page>
  );
};

export default SnippetsPage;
