import "../../css/theme.css";
import "../../css/styles.css";
import Head from "next/head";

/**
 * This is the root page that envelops the page being navigated to.
 */
export default function MyApp({ Component, pageProps }) {
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
