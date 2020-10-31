import { motion, useSpring } from 'framer-motion';
import Head from 'next/head';
import React, { useState } from 'react';

import withPageTransition from '../components/hoc/with-page-transition';
import SocialIcons from '../components/social-icons/SocialIcons';
import IconHelpCircleFilled from '../icons/HelpCircleFilled';
import { useLandingPageCanvasEffect } from '../lib/hooks';

/**
 * Variants for the help section.
 */
const helpSectionVariants = {
  open: {
    duration: 0.5,
    scale: 1
  },
  closed: {
    scale: 0
  }
};

/**
 * The landing page of the application.
 */
const Home: React.FC = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  useLandingPageCanvasEffect();

  return (
    <>
      <Head>
        <title>DB Portfolio</title>
      </Head>
      <div className="home-container w-screen h-screen bg-dark-black flex justify-center items-center -mt-20">
        <motion.div
          className="fixed top-0 left-0 z-10 m-6"
          initial="closed"
          animate={isHelpOpen ? 'open' : 'closed'}>
          <motion.div
            className="absolute p-4 transform origin-top-left bg-dark border-2 border-secondary-text select-none"
            style={{
              top: '15px',
              left: '15px',
              width: '260px'
            }}
            variants={helpSectionVariants}>
            The
            <span role="img" aria-label="fish" className="ml-1">
              🐟
            </span>
            &apos;s love to be petted! Just drag on the screen and watch them
            follow you endlessly. They are also always hungry. Double tap to
            drop some
            <span role="img" aria-label="food" className="mx-1">
              🌯
            </span>
            and watch them as they gobble it up..{' '}
            <span role="img" aria-label="yummy">
              😋
            </span>
          </motion.div>
          <IconHelpCircleFilled
            className="absolute top-0 left-0 text-3xl"
            onClick={() => setIsHelpOpen((isHelpOpen) => !isHelpOpen)}
          />
        </motion.div>

        <canvas
          className="absolute top-0 left-0 w-full h-full"
          id="landing-canvas"></canvas>
        <div className="flex flex-col items-center z-10 p-4 select-none">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Hi, I&apos;m
            <span className="font-cursive text-4xl md:text-6xl lg:text-8xl text-primary">
              Dinesh Balaji
            </span>
          </h1>
          <SocialIcons className="text-2xl md:text-3xl text-secondary m-1 lg:m-2" />
        </div>
      </div>
    </>
  );
};

export default withPageTransition(Home);
