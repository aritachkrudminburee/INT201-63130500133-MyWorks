let product = {
productId:'P001',
productName:'Dell Notebook',
productDesc:'monitor 15 inches, latitude 5500',
price:35000
}


const divProductsEle = document.querySelector('#products');
console.log(divProductsEle)


//<div id = "P001"></div>

const divProductEls = document.createElement('div')
divProductEls.setAttribute('id',product.productId);

//<p>Product ID : P001</p>
const pProductEls = document.createElement('p')
var att = document.createAttribute("class");
pProductEls.textContent='Product ID : ' + product.productId
att.value = "democlass";
pProductEls.setAttributeNode(att);

//<div id = "P001"><p>Product ID : P001</p></div>
divProductEls.appendChild(pProductEls)


const pProductNa = document.createElement('p')

pProductNa.textContent='productName : ' + product.productName
divProductEls.appendChild(pProductNa)

const pProductDesc = document.createElement('p')
pProductDesc.textContent='productDesc : ' + product.productDesc
divProductEls.appendChild(pProductDesc)

const pProductPrice = document.createElement('p')
pProductPrice.textContent='Price : ' + product.price + ' Baht'
divProductEls.appendChild(pProductPrice)
console.log(divProductEls)


//ใส่ที่เราทำไปอยู่ในtree
divProductsEle.appendChild(divProductEls)


