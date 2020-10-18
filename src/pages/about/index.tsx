import { motion } from 'framer-motion';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import SkillsSection from '../../components/skills-section/SkillsSection.component';
import SocialIcons from '../../components/social-icons/SocialIcons';
import { useDrawFaceOnCanvas } from '../../lib/hooks';

/**
 * Represents the about page of the application.
 */
const AboutPage: React.FC = () => {
  useDrawFaceOnCanvas();

  return (
    <>
      <div className="flex flex-wrap">
        <div
          style={{
            height: 'calc(100vh - 80px)'
          }}
          className="relative order-2 lg:order-1 w-full lg:w-1/2 h-full">
          <div
            style={{
              top: '50%',
              left: '10%'
            }}
            className="absolute max-w-xl transform -translate-y-1/2">
            <motion.div>
              <span className="text-5xl">Hi! I&apos;m </span>
              <span className="text-6xl font-cursive text-primary">
                Dinesh Balaji
              </span>
            </motion.div>
            <motion.p className="text-2xl">
              I am a developer and designer from India
              <span role="img" aria-label="India">
                🇮🇳
              </span>
              . I have a passion for programming and designing. I&apos;d call
              myself a Jack of all trades but master of none. I am addicted to
              Cats, Ice cream, JS and anything Open Source.
            </motion.p>
            <motion.div>
              <SocialIcons />
            </motion.div>
          </div>
        </div>
        <div
          style={{
            height: 'calc(100vh - 80px)'
          }}
          className="order-1 lg-order-2 w-full lg:w-1/2 h-full">
          <canvas
            id="canvas"
            style={{
              width: '100%',
              height: '100%'
            }}></canvas>
        </div>
      </div>
      <Page>
        <PageBody>
          <PageHeader
            title="Skills"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, dolores magnam, libero provident optio vero ratione maiores alias vitae, enim ab molestiae blanditiis voluptatem exercitationem quibusdam maxime unde fugiat?"
          />
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
};

export default withPageTransition(AboutPage);
