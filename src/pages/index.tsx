import Head from 'next/head';

import UnderConstruction from '../landing/components/under-construction/UnderContruction';
import { trackEvent } from '../lib/ga';

/**
 * The landing page of the application.
 */
const Home: React.FC = () => {
  const onClick = (value) => {
    trackEvent({
      action: 'click',
      category: 'Social Media',
      label: value
    });
  };

  return (
    <div className="container">
      <Head>
        <title>DB Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="h1">
        Hi , I&apos;m{' '}
        <span className="font-cursive text-8xl text-primary">
          Dinesh Balaji
        </span>
      </h1>
      <div className="social-icons">
        <a
          href="https://github.com/sidthesloth92"
          className="social-icon"
          onClick={() => onClick('Github')}>
          <img alt="github icon" src="/icons/github.svg" />
        </a>
        <a
          href="https://codepen.io/sidthesloth92"
          className="social-icon"
          onClick={() => onClick('Codepen')}>
          <img alt="codepen icon" src="/icons/codepen.svg" />
        </a>
        <a
          href="https://twitter.com/sidthesloth92"
          className="social-icon"
          onClick={() => onClick('Twitter')}>
          <img alt="twitter icon" src="/icons/twitter.svg" />
        </a>
        <a
          href="https://linkedin.com/in/dineshbalajiv"
          className="social-icon"
          onClick={() => onClick('Linkedin')}>
          <img alt="linkedin icon" src="/icons/linkedin.svg" />
        </a>
        <a
          href="https://instagram.com/sidthesloth92"
          className="social-icon"
          onClick={() => onClick('Instagram')}>
          <img alt="github icon" src="/icons/instagram.svg" />
        </a>
        <a
          href="https://www.behance.net/sidthesloth92"
          className="social-icon"
          onClick={() => onClick('Behance')}>
          <img alt="behance icon" src="/icons/behance.svg" />
        </a>
      </div>
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

        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .social-icon {
          width: 28px;
          margin: 0 8px;
        }

        @media screen and (min-width: 577px) {
          .title {
            font-size: 36px;
          }

          .title .name {
            font-size: 64px;
          }

          .social-icon {
            width: 32px;
          }
        }

        @media screen and (min-width: 769px) {
          .title {
            font-size: 64px;
          }

          .title .name {
            font-size: 96px;
          }

          .social-icon {
            width: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
