const data = {
  products: [
    {
      product_id: "1",
      product_name: "Candy Dress",
      product_image: require("../images/outfit4.jpg"),
      product_description: "The new collection of this Summer with hot trending items including: Tops, bottoms, mix with luxury accesories",
      product_price: "300.0",
      pcategory: "Dress",
      pcolor: "Cream",
      ppattern: "Checked",
      pmaterial: "Cotton",
      poccassion: "Office/Work",
      powner: "",
      pavailable: true,
      pphotosup: [require("../images/outfit6.jpg"), require("../images/outfit5.jpg")]
    },
    {
      product_id: "2",
      product_name: "Missout T-shirt",
      product_image: require("../images/outfit5.jpg"),
      product_description: "T-shirt best for couple, and friends",
      product_price: "150.0",
      pcategory: "Shirt",
      pcolor: "White",
      ppattern: "Solid",
      pmaterial: "Cotton",
      poccassion: "Formal",
      pavailable: true,
      pphotosup: [require("../images/donut1.jpg"), require("../images/donut2.jpg"), require("../images/donut3.jpg")],
    },
    {
      product_id: "3",
      product_name: "Missout Hoodie",
      product_image: require("../images/outfit6.jpg"),
      product_description: "Warm, cool for gang club, suits for winter",
      product_price: "250.0",
      pcategory: "Shirt",
      pcolor: "Colorful",
      ppattern: "Graphic",
      pmaterial: "Cotton",
      poccassion: "Go to school",
      pavailable: true,
      pphotosup:[],
    },
  ]
};
export default data;
