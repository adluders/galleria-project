import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/gallery-detail.module.css";

const GalleryDetail = ({ pageContext }) => {
  const { description, name, source, year, artist, largeHero } = pageContext;

  return (
    <Layout>
      <section className={styles.galleryDetails}>
        <div className={styles.galleryInfo}>
          <div className={styles.hero}>
            <GatsbyImage alt={name} image={largeHero.asset.gatsbyImageData} />
            <button className={styles.viewImage}>
              <StaticImage
                src="../images/icon-view-image.svg"
                alt="scale"
                loading="lazy"
              />
              view image
            </button>
          </div>
          <div className={styles.artistInfo}>
            <h1> {name} </h1>
            <p> {artist.name} </p>
          </div>
          <div className={styles.headshot}>
            <GatsbyImage
              alt={artist.name}
              image={artist.headshot.asset.gatsbyImageData}
              className={styles.artist}
            />
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
