import "tailwindcss/tailwind.css";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/style.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="data-theme" defaultTheme="dracula">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Image Editor PWA</title>

          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
