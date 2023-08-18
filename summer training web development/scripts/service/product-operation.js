// product crud operation and searching sorting 
// c-create,r-read,u-update,d-delete
import Product from "../models/product.js";
import doNetworkCall from "./api-client.js" ;
const productOperations ={
   products:[],// key:value
   search(pizzaId){
    const product=this.products.find(currentProduct=> currentProduct.id=pizzaId)   // here this is product operation
    console.log('product is found',product);
    //console.log('dfghb',product);
    product.isAddedInCart = true;
  
   console.log('array',this.products)
   },
   getProductsInCart(){
    const productInBasket= this.products.filter(product=>product.isAddedInCart);
    return productInBasket;

   },
  
    async loadProducts(){
        const pizzas=await doNetworkCall();
        const pizzaArray=pizzas['Vegetarian']
       const productsArray= pizzaArray.map(pizza=>{
            const currentPizza= new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.url);
            return currentPizza;
        })
        console.log('productarray',productsArray)
       // productOperations.products=productsArray
        this.products=productsArray  // here this is product operation
        return  productsArray;

    }
    
}
export default productOperations; 







        

