import { motion } from 'framer-motion';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import CodePenSlider from '../../works/components/codepen-slider/CodePenSlider.component';
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
      'I love doing open source stuff in my spare time. These are stuff that I have created as OS projects or contributions to existing ones.',
    works: [
      {
        name: 'Responsively App',
        url: 'https://github.com/responsively-org/responsively-app',
        description: `I am a <span class="text-secondary">core contributor</span> on this project. It has over <span class="text-secondary">8.5k</span> stars on Github. A must have tool for any front end developer.`
      },
      {
        name: 'HTML Boilerpate - VS Code Plugin',
        url:
          'https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate',
        description: `This is a plugin for Microsoft's VS Code. It has over <span class="text-secondary">780,000</span> installs.`
      },
      {
        name: 'SVG snippets - VS Code Plugin',
        url:
          'https://marketplace.visualstudio.com/items?itemName=sidthesloth.svg-snippets',
        description: `This is a plugin for Microsoft's VS Code. It has over <span class="text-secondary">13.5k </span> installs.`
      },
      {
        name: 'Three Finger Tap JS',
        url: 'https://sidthesloth92.github.io/three-finger-tap-js/index.html',
        description: `A micro JS library that opens a small window when a link in a webpage is clicked.`
      },
      {
        name: 'PM2',
        url: 'https://pm2.keymetrics.io/',
        description: `Contribute to pm2 by adding a flag to PM2's CLI.`
      },
      {
        name: 'Firefox Dev Tools',
        url:
          'https://github.com/firefox-devtools/devtools-core/commits?author=sidthesloth92',
        description: `Added a bunch of Jest test cases to the Firefox devtools core repo.`
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
      title: 'Codepen',
      component: CodePenSlider,
      props: {}
    },
    {
      title: 'Blogs',
      component: WorksList,
      props: {
        title: 'Blogs',
        description:
          'I love to write blogs in my free time. Started out with wordpress and then moved to DEV.to. Now, tyring to combine DEV.to and my personal site.',
        works: [
          {
            name: 'https://dbwriteups.wordpress.com',
            url: 'https://dbwriteups.wordpress.com',
            description: `This was my first blog and where most of my writings have happened so far and has over <span class="text-secondary">100,000</span> views.`
          },
          {
            name: 'DEV.to',
            url: 'https://dev.to/sidthesloth92',
            description: `I started writing here for better SEO and seems it did work out well. It has a lonely post with over <span class="text-secondary">170,000</span> views. Will definitely have to write more.. :D`
          }
        ]
      }
    }
  ];

  return (
    <Page>
      <PageHeader
        title="Works"
        description="These are some of the stuff I have done over the years. I love to program and at the same time I love to design as well. So it'll be kinda all over the place."
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
