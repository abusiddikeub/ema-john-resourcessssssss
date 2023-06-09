import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../shop/Shop';
import './Product.css'

const Product = () => {

const [products,setProducts] =useState([]);

const [cart,setCart] =useState([])

useEffect(()=>{

fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
.then(res =>res.json())
.then(data => setProducts(data));


},[])

const handleToCart =(product)=>{
               // console.log(product)
               const newCart = [...cart,product]
               setCart(newCart);
}

               return (
<div  className='shop-container'> 
<div className='products-container'>
              {
               products.map(product => <Shop 
               img={product.img}
               product ={product}
               handleToCart={handleToCart}
            
               
               ></Shop>)
              }
</div>


<div className='cart-container'> 
         <Cart cart={cart}></Cart>     
               </div>           
                              </div>
               );
};

export default Product;