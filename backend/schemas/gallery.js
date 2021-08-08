export default {
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "artist",
      type: "reference",
      title: "Artist",
      to: [{ type: "artist" }],
    },
    {
      name: "year",
      type: "number",
      title: "Year",
    },
    {
      name: "source",
      type: "string",
      title: "Source",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    },
    {
      name: "smallHero",
      type: "image",
      title: "Small Hero",
    },
    {
      name: "largeHero",
      type: "image",
      title: "Large Hero",
    },
    {
      name: "gallery",
      type: "image",
      title: "Gallery",
    },
  ],
};
