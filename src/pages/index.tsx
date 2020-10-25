import Head from 'next/head';
import React from 'react';

import withPageTransition from '../components/hoc/with-page-transition';
import SocialIcons from '../components/social-icons/SocialIcons';
import { useLandingPageCanvasEffect } from '../lib/hooks';

/**
 * The landing page of the application.
 */
const Home: React.FC = () => {
  useLandingPageCanvasEffect();

  return (
    <>
      <Head>
        <title>DB Portfolio</title>
      </Head>
      <div className="home-container w-screen h-screen bg-dark-black flex justify-center items-center -mt-20">
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
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default withPageTransition(Home);
