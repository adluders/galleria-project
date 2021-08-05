const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allSanityGallery {
        nodes {
          slug {
            current
          }
          artist {
            name
          }
          thumbnail {
            asset {
              gatsbyImageData
            }
          }
          id
          source
          year
          description
          name
        }
      }
    }
  `);

  const galleryTemplate = path.resolve(`src/templates/GalleryDetail.js`);

  results.data.allSanityGallery.nodes.forEach(node => {
    createPage({
      path: `/${node.slug.current}`,
      component: galleryTemplate,
      context: node,
    });
  });
};
