import '../../css/theme.scss';
import '../../css/styles.scss';

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <Menu />
      <div className="mt-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
