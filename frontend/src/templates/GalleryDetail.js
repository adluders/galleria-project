import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/gallery-detail.module.css";

const GalleryDetail = ({ pageContext }) => {
  const { description, name, source, year, artist, thumbnail } = pageContext;

  return (
    <Layout>
      <section className={styles.galleryDetails}>
        <div className={styles.galleryInfo}>
          <GatsbyImage alt={name} image={thumbnail.asset.gatsbyImageData} />
          <div className={styles.artistInfo}>
            <h1> {name} </h1>
            <p> {artist.name} </p>
          </div>
        </div>

        <div className={styles.blurb}>
          <h2>{year}</h2>
          <p>{description}</p>
          <a href={`${source}`} target="_blank" rel="noreferrer">
            go to source
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryDetail;
