import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/index";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  model: string; // 3D model path (using actual GLB paths as provided)
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cloth Jacket",
    price: 299.99,
    rating: 4.5,
    image: image2,
    model: "/models/cloth_jacket.glb",
    description:
      "A stylish, rugged jacket perfect for all seasons. Scan it in 3D below!",
  },
  {
    id: 2,
    name: "Cosmetic Product",
    price: 129.5,
    rating: 4.9,
    image: image6,
    model: "/models/cosmetic_product.glb",
    description:
      "Premium anti-aging cream. View the detailed bottle design in 3D.",
  },
  {
    id: 3,
    name: "Cup of Coffee",
    price: 89.0,
    rating: 4.2,
    image: image3,
    model: "/models/cup_of_coffee.glb",
    description:
      "Ceramic mug designed for the perfect brew. Explore its geometry.",
  },
  {
    id: 5,
    name: "Lv Bag",
    price: 199.99,
    rating: 4.6,
    image: image5,
    model: "/models/lv_bag.glb",
    description:
      "High-fashion leather bag. Examine the textures and stitching up close.",
  },
  {
    id: 6,
    name: "IPhone 17 Pro Max",
    price: 45.99,
    rating: 4.8,
    image: image1,
    model: "/models/phone_17_pro_max.glb",
    description:
      "The latest in smartphone technology. Rotate the 3D model for every angle.",
  },
  {
    id: 8,
    name: "Wooden Duck Toy",
    price: 45.99,
    rating: 4.8,
    image: image4,
    model: "/models/wooden_duck_toy.glb",
    description:
      "A classic, hand-carved wooden toy. Simple, charming, and detailed in 3D.",
  },
  {
    id: 7,
    name: "Shose",
    price: 45.99,
    rating: 4.8,
    image: "https://placehold.co/400x400/f43f5e/ffffff?text=Shose",
    model: "/models/shose.glb",
    description:
      "Athletic running shoes with breathable mesh. Check out the sole pattern.",
  },
  {
    id: 4,
    name: "Glasses",
    price: 59.99,
    rating: 4.7,
    image: "https://placehold.co/400x400/22c55e/ffffff?text=Glasses",
    model: "/models/glasses.glb",
    description:
      "Modern spectacle frames. Try them on virtually using the 3D model.",
  },
];
