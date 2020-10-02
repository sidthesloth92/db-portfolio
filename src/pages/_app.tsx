import "../../css/theme.css";
import "../../css/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackPageView } from "../lib/ga";

/**
 * This is the root page that envelops the page being navigated to.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfolio Website" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Portfolio, React, Angular, Next"
        />
        <meta name="author" content="Dinesh Balaji Venkataraj" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
