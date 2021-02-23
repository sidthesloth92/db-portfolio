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
              Anand Karki
              </span>
            </motion.div>
            <motion.p
              className="text-base md:text-2xl mb-4"
              variants={aboutInfoVariants}>
              I'm a 3rd-year Computer Science student at the University of Toronto. 
              Specializing in the entrepreneurial stream, computer science really has grown on me, 
              and I like learning abstract concepts and the rigorous mathematical reasoning behind them. 
              Scroll down to see some of my other interests. 
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
            title="Interests"
            description="I've always been curious and a little adventurous, so I'm into a lot of wildly different things. I spend a lot time watching and reading about these topic, so I've attached some of my favourite YouTube for each."
          />
          <SkillsSection
            title="Zoology"
            spells={['Killer Whales Beaching Themsevles', 'Lions vs Hyenas']}
            wands={['Cute Dogs', 'Cute Cats', "Cute Bears"]}
          />
          <SkillsSection
            theme="secondary"
            title="History"
            spells={[
              "Napoleon's rise",
              "Caesar's rise",
              "Alexander The Great's story",
              "The Prince"
            ]}
            wands={[
              'Greatest Raid of All Time',
              "Nepal's Communist Revolution",
              "Margaret Thatcher's Life"
            ]}
          />
          <SkillsSection
            title="Philosophy And Life"
            spells={[
              'Sadhguru on Seriousness',
              "Steve Job's on experinces",
              "Buddhism"
            ]}
            wands={[
              
              "Logical Reason to Love Yourself",
              'Stephen Fry on Confidence',
              'Importance of Being Active',
            ]}
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
