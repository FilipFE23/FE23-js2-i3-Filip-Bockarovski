export async function fetchProducts(){
  const url = 'https://dummyjson.com/products'

  const res = await fetch(url)
  const products = await res.json()

  console.log(products);

  return products
}