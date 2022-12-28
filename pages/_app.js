import "../styles/globals.scss";
import Layout from "./Layout";
import { Analytics } from "@vercel/analytics/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </RecoilRoot>
  );
}
