import { displayNoResult } from "./modules/dislpay.ts";
import { fetchProducts, fetchSearchedProducts } from "./modules/fetchAPI.ts";

fetchProducts();

const form = document.querySelector('#form') as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const productContainer = document.querySelector('#product-container') as HTMLDivElement;
  const searchInput = document.querySelector('#searched-product') as HTMLInputElement
  const inputValue = searchInput.value
  
  productContainer.innerHTML = ''

  if(inputValue === ''){
    displayNoResult()
  }
  else(
    fetchSearchedProducts(inputValue)
  )

  form.reset()
})