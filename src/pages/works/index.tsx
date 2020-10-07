import React from 'react';

import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import WorksList, {
  WorksListProps
} from '../../components/works-list/WorksList.component';

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

  return (
    <Page>
      <PageHeader
        title="Works"
        description="These are some of the stuff I have done over the years. I love to program and at the same time I love to design too.  So I’ve never managed to hit the full stride in either. Neverthless, bear with me."
      />
      <PageBody>
        <WorksList {...openSourceWorksList} />
        <WorksList {...openSourceWorksList} />
        <WorksList {...openSourceWorksList} />
      </PageBody>
    </Page>
  );
};

export default WorksPage;
