import { graphql } from "gatsby";
import React from "react";
import GalleryItem from "../components/GalleryItem";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <title> Galleria </title>
      <section className="gallery">
        {data.allSanityGallery.nodes.map(gallery => (
          <GalleryItem key={gallery.id} gallery={gallery} />
        ))}
      </section>
    </Layout>
  );
};

export const indexData = graphql`
  {
    allSanityGallery {
      nodes {
        id
        name
        description
        source
        year
        slug {
          current
        }
        artist {
          name
        }
        thumbnail {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
