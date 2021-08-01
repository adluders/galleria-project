export default {
  name: "artist",
  type: "document",
  title: "Artist",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "headshot",
      type: "image",
      title: "Headshot",
    },
  ],
};
