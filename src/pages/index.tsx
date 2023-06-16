import * as React from "react";
import { Layout } from "../components/Layout";
import Contact from "../components/contact";

const IndexPage = () => {
  return (
    <Layout>
      {/* Your page content goes here */}
      <h1>Hello, welcome to my portfolio!</h1>
      <p>This is a sample home page.</p>
      <Contact />
    </Layout>
  );
};

export default IndexPage;
