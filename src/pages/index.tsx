import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import withPageTransition from '../components/hoc/with-page-transition';
import SocialIcons from '../components/social-icons/SocialIcons';
import UnderConstruction from '../landing/components/under-construction/UnderContruction';

/**
 * The landing page of the application.
 */
const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>DB Portfolio</title>
      </Head>

      <h1 className="h1">
        Hi , I&apos;m{' '}
        <span className="font-cursive text-8xl text-primary">
          Dinesh Balaji
        </span>
      </h1>
      <SocialIcons />
      <UnderConstruction />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 0px;
        }

        .title .name {
          font-size: 36px;
          font-family: 'Adinda Melia';
          color: var(--color-primary);
        }

        @media screen and (min-width: 577px) {
          .title {
            font-size: 36px;
          }

          .title .name {
            font-size: 64px;
          }
        }

        @media screen and (min-width: 769px) {
          .title {
            font-size: 64px;
          }

          .title .name {
            font-size: 96px;
          }
        }
      `}</style>
    </div>
  );
};

export default withPageTransition(Home);
