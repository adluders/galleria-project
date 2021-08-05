import React from "react";
import Layout from "../components/Layout";

const GalleryDetail = ({ pageContext }) => {
  const { description, name, source, year } = pageContext;

  return (
    <Layout>
      <section>
        <h1> {name} </h1>
      </section>

      <section>
        <h2>{year}</h2>
        <p>{description}</p>
        <a href={`${source}`} target="_blank" rel="noreferrer">
          go to source
        </a>
      </section>
    </Layout>
  );
};

export default GalleryDetail;
