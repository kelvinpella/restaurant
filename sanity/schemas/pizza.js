export const pizza = {
  name: "pizza",
  title: "Pizza",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name Of Pizza",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "about",
      title: "About Pizza",
      type: "string",
    },
    {
      name: "pizzaSizes",
      title: "Pizza Sizes and Prices",
      type: "object",
      fields: [
        {
          name: "small",
          title: "Small",
          type: "number",
          description: "Enter the price for the small size",
        },
        {
          name: "medium",
          title: "Medium",
          type: "number",
          description: "Enter the price for the medium size",
        },
        {
          name: "large",
          title: "Large",
          type: "number",
          description: "Enter the price for the large size",
        },
      ],
    },
    {
      name: "coverimage",
      title: "Cover image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
  ],
};
