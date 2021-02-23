// import { GetStaticPropsResult } from 'next';

// import withPageTransition from '../../components/hoc/with-page-transition';
// import { Nugget } from '../../models/Nugget';
// import NuggetsPage from '../../nuggets/nuggets-page/NuggetsPage.component';
// import { getNuggets } from '../api/nuggets';

// export interface NuggetsPageProps {
//   nuggets: Nugget[];
// }

// export const getStaticProps = async (): Promise<
//   GetStaticPropsResult<NuggetsPageProps>
// > => {
//   console.log('\nRunning getStaticProps for nuggets');
//   try {
//     const nuggets = await getNuggets();
//     return {
//       props: {
//         nuggets
//       },
//       revalidate: 300
//     };
//   } catch (e) {
//     console.error('Error while fetching getStaticProps nuggets: ', e);
//   }
// };

// export default withPageTransition(NuggetsPage);



import UnderConstruction from '../../landing/components/under-construction/UnderContruction'
import withPageTransition from '../../components/hoc/with-page-transition';

export default withPageTransition(UnderConstruction);