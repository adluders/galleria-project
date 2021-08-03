import { Link } from "gatsby";
import React from "react";
import * as styles from "../styles/gallery-item.module.css";

const GalleryItem = ({ gallery }) => {
  return (
    <Link to={gallery.slug.current} className={styles.gallery}>
      <h2>{gallery.name}</h2>
      <p>{gallery.artist.name}</p>
    </Link>
  );
};

export default GalleryItem;
