import React from "react";

import "../css/styles.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
