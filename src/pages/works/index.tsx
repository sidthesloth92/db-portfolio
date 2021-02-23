import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import WorksList, {
  WorksListProps
} from '../../works/components/works-list/WorksList.component';
import WorksSlider, {
  WorkSliderItem
} from '../../works/components/works-slider/WorksSlider';

/**
 * Animtion variations for the slider container.
 */
const sliderContainerVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(100%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      when: 'beforeChildren',
      delay: 0.6,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Represents the works page of the application.
 */
const WorksPage: React.FC = () => {
  const openSourceWorksList: WorksListProps = {
    title: 'MPAC',
    description:
      'My first internship. MPAC evaluates all of the properties in Ontario. They deal with an enormous amount of data. I got to spend 8 months with an amazing team working on applications that processed business requests. Here are some technologies I got to learn and use:',
    works: [
      {
        name: 'React',
        url: 'https://reactjs.org/',
        description: ``
      },
      {
        name: 'Redux Saga',
        url: 'https://redux-saga.js.org/',
        description: ``
      },
      {
        name: 'Spring',
        url:
          'https://spring.io/',
        description: ``
      },
      {
        name: 'Flask',
        url:
          'https://flask.palletsprojects.com/en/1.1.x/',
        description: ``
      },
      {
        name: 'Angular',
        url: 'https://angular.io/',
        description: ``
      },
      {
        name: 'AWS',
        url: 'https://aws.amazon.com/',
        description: ``
      }
    ]
  };

  const worksSliderItems: WorkSliderItem[] = [
    {
      title: 'MPAC',
      component: WorksList,
      props: openSourceWorksList
    }
  ];

  return (
    <Page>
      <Head>
        <title>Works - Things I&apos;ve done.</title>

        <meta property="og:title" content="Works - Things I've done." />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/works}`}
        />

        <meta name="twitter:title" content="Works - Things I've done." />
        <meta
          name="twitter:description"
          content="These are some of the stuff I have done over the years."
        />
      </Head>
      <PageHeader
        title="Works"
        description="These are places I've worked at. Still early into my career, so there's not a whole lot of places but you can bet your bottom dollar there will be more soon."
      />
      <PageBody>
        <motion.div variants={sliderContainerVariants} className="mt-32">
          <WorksSlider items={worksSliderItems} />
        </motion.div>
      </PageBody>
    </Page>
  );
};

export default withPageTransition(WorksPage);
