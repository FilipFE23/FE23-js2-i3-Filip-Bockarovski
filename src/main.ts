import { fetchProducts } from "./modules/fetchAPI.ts";

fetchProducts()

type ProductCard = {
  image: String,
  title: String,
  description: String,
  rating: Number,
  stock: Number,
  category: String,
}