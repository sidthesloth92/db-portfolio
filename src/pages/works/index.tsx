import { motion } from 'framer-motion';
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
    title: 'Open Source',
    description:
      'I love doing open source stuff in my spare time. These may be stuff that I create or contributions to existing open source projects.',
    works: [
      {
        name: 'HTML Bolierpate - VS Code Plugin',
        url: 'http://github.com',
        description: `This is a plugin for the Microsoft Visual Studio Code editor. It has over <span class="text-secondary">750,000 </span> downloads.`
      },
      {
        name: 'HTML Bolierpate - VS Code Plugin',
        url: 'http://github.com',
        description: `This is a plugin for the Microsoft Visual Studio Code editor. It has over <span class="text-secondary">750,000 </span> downloads.`
      },
      {
        name: 'HTML Bolierpate - VS Code Plugin',
        url: 'http://github.com',
        description: `This is a plugin for the Microsoft Visual Studio Code editor. It has over <span class="text-secondary">750,000 </span> downloads.`
      },
      {
        name: 'HTML Bolierpate - VS Code Plugin',
        url: 'http://github.com',
        description: `This is a plugin for the Microsoft Visual Studio Code editor. It has over <span class="text-secondary">750,000 </span> downloads.`
      },
      {
        name: 'HTML Bolierpate - VS Code Plugin',
        url: 'http://github.com',
        description: `This is a plugin for the Microsoft Visual Studio Code editor. It has over <span class="text-secondary">750,000 </span> downloads.`
      }
    ]
  };

  const worksSliderItems: WorkSliderItem[] = [
    {
      title: 'Open Source',
      component: WorksList,
      props: openSourceWorksList
    },
    {
      title: 'Blogs',
      component: WorksList,
      props: openSourceWorksList
    },
    {
      title: 'Codepen',
      component: WorksList,
      props: openSourceWorksList
    }
  ];

  return (
    <Page>
      <PageHeader
        title="Works"
        description="These are some of the stuff I have done over the years. I love to program and at the same time I love to design too.  So I’ve never managed to hit the full stride in either. Neverthless, bear with me."
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
