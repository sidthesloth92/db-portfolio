import React from 'react';

import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import SkillsSection from '../../components/skills-section/SkillsSection.component';

/**
 * Represents the about page of the application.
 */
const AboutPage: React.FC = () => (
  <>
    <Page>
      <PageHeader
        title="Skills"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, dolores magnam, libero provident optio vero ratione maiores alias vitae, enim ab molestiae blanditiis voluptatem exercitationem quibusdam maxime unde fugiat?"
      />
      <PageBody>
        <SkillsSection
          title="Design"
          spells={['Designing is exactly not a spell.. :)']}
          wands={['Sketch', 'Figma', 'Zeplin', 'Good Old Pen and Paper']}
        />
        <SkillsSection
          theme="secondary"
          title="Frontend"
          spells={[
            'HTML',
            'CSS',
            'JS',
            'Typescript',
            'Angular',
            'React',
            'Sass',
            'Ionic',
            'NextJS',
            'Jest'
          ]}
          wands={['VS Code', 'Terminal', 'Bitbucket', 'Github']}
        />
        <SkillsSection
          title="Backend"
          spells={[
            'NodeJS',
            'NestJS',
            'Express JS',
            'Spring Boot',
            'Spring Security',
            'Go',
            'No Sql and SQL'
          ]}
          wands={['VS Code', 'IntelliJ', 'Eclipse']}
        />
      </PageBody>
    </Page>
  </>
);

export default AboutPage;
