import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

import Layout from "../components/Layout";
import SSRProvider from "react-bootstrap/SSRProvider";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}

export default MyApp;
