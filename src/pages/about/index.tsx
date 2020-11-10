import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import SkillsSection from '../../components/skills-section/SkillsSection.component';
import SocialIcons from '../../components/social-icons/SocialIcons';
import { useDrawFaceOnCanvas } from '../../lib/hooks';

/**
 * Placeholder variants for staggering about info.
 */
const aboutInfoContainerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.5,
      when: 'beforeChildren'
    }
  }
};

/**
 * Animation variants for the about info.
 */
const aboutInfoVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Represents the about page of the application.
 */
const AboutPage: React.FC = () => {
  useDrawFaceOnCanvas();

  return (
    <>
      <Head>
        <title>About - Get to know me</title>

        <meta property="og:title" content="About - Get to know me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/about}`}
        />

        <meta name="twitter:title" content="About - Get to know me" />
        <meta
          name="twitter:description"
          content="These are some of the skills that I picked up along the way in both professional life and also while simply loitering around the web."
        />
      </Head>
      <div className="flex flex-wrap items-center">
        <div className="order-2 lg:order-1 lg:w-1/2 mt-8 lg:mt-0 mb-16">
          <motion.div
            className="lg:max-w-xl flex flex-col justify-center align-center m-auto p-4 text-center lg:text-left"
            variants={aboutInfoContainerVariants}>
            <motion.div className="mb-4" variants={aboutInfoVariants}>
              <span className="text-3xl md:text-4xl lg:text-5xl ">
                Hi! I&apos;m
              </span>
              <span className="text-5xl md:text-5xl lg:text-6xl font-cursive text-primary">
                Dinesh Balaji
              </span>
            </motion.div>
            <motion.p
              className="text-base md:text-2xl mb-4"
              variants={aboutInfoVariants}>
              I am a developer and designer from India
              <span role="img" aria-label="India" className="ml-1">
                🇮🇳
              </span>
              . I have a passion for programming and designing. I&apos;d call
              myself a Jack of all trades but master of none. I am addicted to
              Cats,
              <span role="img" aria-label="ice-cream">
                🍦
              </span>
              , JS and anything Open Source.
            </motion.p>
            <motion.div className="m-auto lg:mx-0" variants={aboutInfoVariants}>
              <SocialIcons className="text-2xl md:text-3xl m-1 lg:m-2" />
            </motion.div>
          </motion.div>
        </div>
        <div className="canvas-container relative order-1 lg-order-2 w-full lg:w-1/2 h-full">
          <canvas
            id="about-face-canvas"
            className="absolute"
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
            description="These are some of the skills that I picked up along the way in both professional life and also while simply loitering around the web."
          />
          <SkillsSection
            title="Design"
            spells={['Sketch', 'Figma']}
            wands={['Zeplin', 'Good Old Pen and Paper']}
          />
          <SkillsSection
            theme="secondary"
            title="Frontend"
            spells={[
              'HTML',
              'Pug',
              'CSS',
              'SASS/SCSS',
              'TailwindCSS',
              'JS',
              'Typescript'
            ]}
            wands={[
              'Angular',
              'React',
              'Ionic',
              'NextJS',
              'Apollo Client',
              'Jest',
              'Capacitor'
            ]}
          />
          <SkillsSection
            title="Backend"
            spells={[
              'NodeJS',
              'NestJS',
              'Apollo Server',
              'Express JS',
              'TypeORM',
              'Spring Boot'
            ]}
            wands={[
              'Spring Security',
              'JPA',
              'Spring Consul',
              'Spring Batch',
              'Go'
            ]}
          />
          <SkillsSection
            theme="secondary"
            title="Databases"
            spells={['MySQL', 'Couchbase']}
            wands={['MongoDB', 'Redis']}
          />
          <SkillsSection
            title="Tools"
            spells={['VS Code', 'IntelliJIDEA', 'Sublime', 'Eclipse']}
            wands={['Terminal', 'Vi', 'Git', 'Atlassian Tool Suite']}
          />
        </PageBody>
      </Page>
      <style jsx>{`
        .canvas-container {
          height: calc(100vw - 80px);
        }

        @media screen and (min-width: 769px) {
          .canvas-container {
            height: calc(100vh - 80px);
          }
        }
      `}</style>
    </>
  );
};

export default withPageTransition(AboutPage);
