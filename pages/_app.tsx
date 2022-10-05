import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
