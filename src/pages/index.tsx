import { motion } from 'framer-motion';
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
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'circOut'
    }
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
        <title>Anand Karki&apos;s Portfolio and Blog</title>
        <meta
          property="og:title"
          content="Anand Karki's Portfolio and Blog"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}}`}
        />

        <meta
          name="twitter:title"
          content="Anand Karki's Portfolio and Blog"
        />
        <meta
          name="twitter:description"
          content="Anand Karki's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
        />
      </Head>
      <div className="home-container w-screen h-screen bg-dark-black flex justify-center items-center -mt-20">
        <canvas
          className="absolute top-0 left-0 w-full h-full"
          id="landing-canvas"></canvas>
        <div className="flex flex-col items-center z-10 p-4 select-none">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Hi, I&apos;m
            <span className="font-cursive text-4xl md:text-6xl lg:text-8xl text-primary">
              Anand Karki
            </span>
          </h1>
          <SocialIcons className="text-2xl md:text-3xl m-1 lg:m-2" />
        </div>
      </div>
    </>
  );
};

export default withPageTransition(Home);
