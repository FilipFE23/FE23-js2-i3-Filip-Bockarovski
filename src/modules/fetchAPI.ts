export type Product = {
  thumbnail: string,
  title: string,
  description: string,
  rating: number,
  stock: number,
  category: string,
}

export async function fetchProducts(): Promise<Product[]>{
  const url = 'https://dummyjson.com/products';

  const res = await fetch(url);
  const products = await res.json();
  const productsArr = products.products;

  const reorgProductArr: Product[] = productsArr.map((product: any) => ({
    thumbnail: product.thumbnail,
    title: product.title,
    description: product.description,
    rating: product.rating,
    stock: product.stock,
    category: product.category,
  }));

  return reorgProductArr;
};

export async function fetchSearchedProducts(search: string): Promise<Product[]>{
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

  return reorgProductArr;
}