// glue between view and model
// controller UI I/O
import productOperations from "../service/product-operation.js";

async function loadPizzas(){
const pizzas=await productOperations.loadProducts();
console.log('pizzas are',pizzas);                                           



 
for(let pizza of pizzas){
    preparePizzaCard(pizza);

}
}
function addToCart(){
    console.log('add to cart call',this)   // this have reference of current calling 
    const currentButton =this;
    const pizzaId=currentButton.getAttribute('product-id');
    console.log('Pizza Id is', pizzaId)
    productOperations.search(pizzaId);
    printBasket();
}
function printBasket(){
   const cartProducts= productOperations.getProductsInCart();
   const basket=document.querySelector('#basket');
   //basket.innerHTML='';
   for(let product of cartProducts){
    const li=document.createElement('li')
    li.innerText=`${product.name} ${product.price}`;
    basket.appendChild(li);
    

   }

}


function preparePizzaCard(pizza){
    const outputDiv=document.querySelector('#output')
    const colDiv=document.createElement('div');
    colDiv.className='col-4';
    const cardDiv=document.createElement('div');
    cardDiv.className='card';
    cardDiv.style="width:18rem;";
    colDiv.appendChild(cardDiv);
    const img=document.createElement('img');
    img.src= pizza.url;
    img.className='card-img-top';
    cardDiv.appendChild(img);
    const cardBody=document.createElement('div');
    cardBody.className='card-body';
    cardDiv.appendChild(cardBody);
    const h5= document.createElement('h5')
    h5.className='card-title';
    h5.innerText=pizza.name + " RS" + pizza.price;;
    const pTag=document.createElement('p');
    pTag.className='card-text';
    pTag.innerText= pizza.desc;
    const button=document.createElement('button')
    button.setAttribute('product-id',pizza.id)// Id
    button.addEventListener('click',addToCart) //Event Bind
    button.innerText= `Add ₹${pizza.price}`;
    button.className='btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);

   

}
loadPizzas();

