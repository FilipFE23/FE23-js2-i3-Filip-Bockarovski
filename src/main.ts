import { displayNoResult, displayProducts } from "./modules/dislpay.ts";

displayProducts();

const form = document.querySelector('#form') as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const productContainer = document.querySelector('#product-container') as HTMLDivElement;
  const searchInput = document.querySelector('#searched-product') as HTMLInputElement;
  const inputValue = searchInput.value;
  
  productContainer.innerHTML = ''

  if(inputValue === ''){
    displayNoResult();
  }
  else(
    displayProducts(inputValue)
  )

  form.reset()
})