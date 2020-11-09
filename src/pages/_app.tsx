import '../../css/theme.scss';
import '../../css/styles.scss';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';
import NavBar from '../components/nav-bar/NavBar';
import { trackPageView } from '../lib/ga';

/**
 * This is the root page that envelops the page being navigated to.
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NavBar />
      <Menu />
      <div
        className="pt-20"
        style={{
          maxWidth: '100vw',
          width: '100vw',
          overflow: 'hidden'
        }}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component key={router.asPath} {...pageProps} one={'one'} />
        </AnimatePresence>
        {router.pathname.length > 1 && <Footer />}
      </div>
    </>
  );
};

export default MyApp;
