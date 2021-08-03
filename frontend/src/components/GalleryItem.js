import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import * as styles from "../styles/gallery-item.module.css";

const GalleryItem = ({ gallery }) => {
  const imageData = gallery.thumbnail.asset.url;
  return (
    <Link to={gallery.slug.current} className={styles.gallery}>
      <BackgroundImage>
        <h2>{gallery.name}</h2>
        <p>{gallery.artist.name}</p>
      </BackgroundImage>
    </Link>
  );
};

export default GalleryItem;
