export function displayProducts(object: any){
  if (object.length === 0){
    displayNoResult()
  }
  else if(object.length > 0){
    object.forEach((element: any) => {
      const productContainer = document.querySelector('#product-container') as HTMLDivElement;
      const createDivEle = document.createElement('div');
      const createInfoDivEle = document.createElement('div');
      const createImgEle = document.createElement('img');
      const createH1Ele = document.createElement('h1');
      const createDescriptPEle = document.createElement('p');
      const createRatingPEle = document.createElement('p');
      const createStockPEle = document.createElement('p');
      const createCategoryPEle = document.createElement('p');
      const createButtonEle = document.createElement('button');

      createDivEle.classList.add('box')
      createDivEle.classList.add('center-element')
      createImgEle.classList.add('image-style')

      createImgEle.src = element.images[0];
      createH1Ele.innerText = element.title;
      createDescriptPEle.innerText = element.description;
      createRatingPEle.innerText = `Rating: ${element.rating}`;
      createStockPEle.innerText = `In stock: ${element.stock}`;
      createCategoryPEle.innerText = `Category: ${element.category}`;
      createButtonEle.innerText = 'Add to cart';

      createInfoDivEle.append(createH1Ele, createDescriptPEle, createRatingPEle, createStockPEle, createCategoryPEle,);
      createDivEle.append(createImgEle, createInfoDivEle, createButtonEle);
      productContainer.append(createDivEle);
    });
  };
};

export function displayNoResult(){
  const productContainer = document.querySelector('#product-container') as HTMLDivElement;
    const createH1 = document.createElement('h1')

    createH1.innerText = 'No search results found...'

    productContainer.append(createH1)
}