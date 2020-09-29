import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * The document of the application.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
