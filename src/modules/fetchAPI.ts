import { displayProducts } from "./dislpay";

type Product= {
  thumbnail: String,
  title: String,
  description: String,
  rating: Number,
  stock: Number,
  category: String,
}

export async function fetchProducts(){
  const url = 'https://dummyjson.com/products';

  const res = await fetch(url);
  const products = await res.json();
  const productsArr = products.products;

  const reorgProductArr: Product[] = productsArr.map((products: any) => ({
    thumbnail: products.thumbnail,
    title: products.title,
    description: products.description,
    rating: products.rating,
    stock: products.stock,
    category: products.category,
  }));

  displayProducts(reorgProductArr);

  return reorgProductArr as any;
};

export async function fetchSearchedProducts(search: String) {
  const url = `https://dummyjson.com/products/search?q=${search}`;

  const res = await fetch(url);
  const products = await res.json();
  const productsArr = products.products;

  const reorgProductArr: Product[] = productsArr.map((products: any) => ({
    thumbnail: products.thumbnail,
    title: products.title,
    description: products.description,
    rating: products.rating,
    stock: products.stock,
    category: products.category,
  }));

  displayProducts(reorgProductArr);

  return reorgProductArr as any;
}