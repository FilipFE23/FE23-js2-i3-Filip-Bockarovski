import { displayProducts } from "./dislpay";

export async function fetchProducts(){
  const url = 'https://dummyjson.com/products';

  const res = await fetch(url);
  const products = await res.json();
  const productsArr = products.products;

  // type Product= {
  //   thumbnail: String,
  //   title: String,
  //   description: String,
  //   rating: Number,
  //   stock: Number,
  //   category: String,
  // }

  displayProducts(productsArr);

  return productsArr as any;
};

export async function fetchSearchedProducts(search: String) {
  const url = `https://dummyjson.com/products/search?q=${search}`;
  
  const res = await fetch(url);
  const products = await res.json();
  const productsArr = products.products;
  
  displayProducts(productsArr);
  
  return productsArr as any;
}