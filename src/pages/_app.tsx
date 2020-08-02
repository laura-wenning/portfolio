import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../scss/_app.scss";
import Page from "../components/Page";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
