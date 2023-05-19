import { groq } from "next-sanity";
import { client } from "./lib/client";

export const getAllPizza = async () => {
  return client.fetch(groq`*[_type== "pizza"]{
        _id,
        name,
          about,
          pizzaSizes,
          "slug":slug.current,
        "coverimage":{"alt":coverimage.alt,"imageUrl":coverimage.asset->url}
      }`);
};

export const getPizza = async (slug) =>
  client.fetch(
    groq`
    *[_type== "pizza" && slug.current == $slug ][0]{
        name,
          about,
          pizzaSizes,
          "slug":slug.current,
        "coverimage":{"alt":coverimage.alt,"imageUrl":coverimage.asset->url}
      }
`,
    { slug }
  );
