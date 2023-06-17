import React from 'react';
import { Layout } from "../components/Layout";
import Contact from "../components/contact";
import { PageProps, graphql } from "gatsby";

type DataProps = {
  site: {
    siteMetadata: {
      fullName: string
    }
  }
}

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const name = data.site.siteMetadata.fullName

  return (
    <Layout>
      {/* Your page content goes here */}
      <h1>Hello, welcome to my portfolio!</h1>
      <h2>My name is {name}</h2>
      <p>This is a sample home page.</p>
      <Contact />
    </Layout>
  );
};

export const query = graphql`
query HomepageQuery {
  site {
    siteMetadata {
      fullName
    }
  }
}
`;

export default IndexPage;
