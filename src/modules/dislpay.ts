import { Product, fetchProducts, fetchSearchedProducts } from "./fetchAPI.ts";

export function createProductCard(object: Product[]): void{
  if (object.length === 0){
    displayNoResult()
  }
  else if(object.length > 0){
    object.forEach((element) => {
      const productContainer = document.querySelector('#product-container') as HTMLDivElement;
      const divEle = document.createElement('div');
      const infoDivEle = document.createElement('div');
      const imgEle = document.createElement('img');
      const h1Ele = document.createElement('h1');
      const descriptPEle = document.createElement('p');
      const ratingPEle = document.createElement('p');
      const stockPEle = document.createElement('p');
      const categoryPEle = document.createElement('p');
      const buttonEle = document.createElement('button');

      divEle.classList.add('box')
      divEle.classList.add('center-element')
      imgEle.classList.add('image-style')
      buttonEle.classList.add('button-style')

      imgEle.src = element.thumbnail;
      h1Ele.innerText = element.title;
      descriptPEle.innerText = element.description;
      ratingPEle.innerText = `Rating: ${element.rating}`;
      if (element.stock < 10){
        stockPEle.classList.add('low-stock')
        stockPEle.innerText = `In stock: ${element.stock}`;
      }
      else if(element.stock >= 10){
        stockPEle.innerText = `In stock: ${element.stock}`;
      }
      categoryPEle.innerText = `Category: ${element.category}`;
      buttonEle.innerText = 'Add to cart';

      infoDivEle.append(h1Ele, descriptPEle, ratingPEle, stockPEle, categoryPEle,);
      divEle.append(imgEle, infoDivEle, buttonEle);
      productContainer.append(divEle);
    });
  };
};

export function displayNoResult(): void{
  const productContainer = document.querySelector('#product-container') as HTMLDivElement;
    const h1Ele = document.createElement('h1')

    h1Ele.innerText = 'No search results found...'

    productContainer.append(h1Ele)
}

export async function displayProducts(search?: string): Promise<void>{
  if(search != undefined){
    const productsArr = await fetchSearchedProducts(search)
    createProductCard(productsArr)
  }
  else{
    const productsArr = await fetchProducts()
    createProductCard(productsArr)
  }
}