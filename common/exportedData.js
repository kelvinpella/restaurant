import pizzaImage from ".././public/images/pizza.png";
export const pizzaData = {
  img: pizzaImage,
  name: "campagnola",
  description:
    "Consequat incididunt nostrud incididunt dolor nulla laborum irure eu dolor consectetur occaecat laborum et aliquip. Elit veniam incididunt aliquip veniam. Sint adipisicing proident aute id sint. Ipsum laboris fugiat est aliqua sint magna tempor mollit velit.",
  availableSizes: {
    small: { category: "size", label: "small", value: "small", price: 19.9 },
    medium: { category: "size", label: "medium", value: "medium", price: 23.9 },
    large: { category: "size", label: "large", value: "large", price: 27.9 },
  },
  availableAdditionalIngredients: [
    {
      category: "additionalIngredients",
      label: "Double Ingredients",
      value: "doubleingredients",
    },
    {
      category: "additionalIngredients",
      label: "Extra cheese",
      value: "extracheese",
    },
    {
      category: "additionalIngredients",
      label: "Spicy sauce",
      value: "spicysauce",
    },
    {
      category: "additionalIngredients",
      label: "Garlic sauce",
      value: "garlicsauce",
    },
  ],
};
