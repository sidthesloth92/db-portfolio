import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/ga';

/**
 * The document of the application.
 */
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Dinesh Balaji's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
          />
          <meta name="author" content="Dinesh Balaji Venkataraj" />

          {/* Open Graph */}
          <meta
            property="og:site_name"
            content={process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}
          />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/img/logo-social.png`}
          />
          <meta
            property="article:author"
            content="https://twitter.com/sidthesloth92"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@sidthesloth92" />

          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />

          {/* MS Clarity */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "3wepfcyg68");
              `
            }}
          />
        </Head>
        <body className={'font-sans text-base text-white bg-dark'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
