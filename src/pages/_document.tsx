import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body className="bg-base-100 text-neutral-content">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default _Document;
