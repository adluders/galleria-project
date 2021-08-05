import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/gallery-item.module.css";

const GalleryItem = ({ gallery }) => {
  return (
    <Link to={gallery.slug.current} className={styles.gallery}>
      <GatsbyImage
        alt="random text"
        image={gallery.thumbnail.asset.gatsbyImageData}
      />
      <div className={styles.text}>
        <h2>{gallery.name}</h2>
        <p>{gallery.artist.name}</p>
      </div>
    </Link>
  );
};

export default GalleryItem;
