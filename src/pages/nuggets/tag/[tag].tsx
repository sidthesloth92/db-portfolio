// import { GetServerSideProps } from 'next';

// import withPageTransition from '../../../components/hoc/with-page-transition';
// import NuggetsPage from '../../../nuggets/nuggets-page/NuggetsPage.component';
// import { getNuggets } from '../../api/nuggets';

// export const getServerSideProps: GetServerSideProps = async ({
//   query: { tag }
// }) => {
//   console.log(tag);

//   console.log('\nRunning getServerSideProps for nuggets with tag: ', tag);

//   try {
//     const nuggets = await getNuggets({
//       tag: String(tag)
//     });

//     return {
//       props: {
//         nuggets
//       }
//     };
//   } catch (e) {
//     console.error(
//       'Error while fetching getServerSideProps for nuggets with tag: ',
//       tag,
//       e
//     );
//   }
// };

// export default withPageTransition(NuggetsPage);
