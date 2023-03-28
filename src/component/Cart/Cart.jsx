import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
               //  const cart= props.cart    ///option 1
               // const {cart} = props;  option 2

 console.log(cart);
              

 let totalPrice = 0;
let totalShipping =0;

 for(const product of cart){
                console.log(product);
                totalPrice =totalPrice + product.price;
                totalShipping = totalShipping +product.shipping; 
 }
const tax = totalPrice*7/100;
const grandTotal = totalPrice + totalShipping +tax;


               return (
                              <div className='cart'>
                                <h3>Order summery</h3>
               <p>Selected item : {cart.length}</p>
               <p>Total price : ${totalPrice}</p>
               <p>Shipping : ${totalShipping}</p>
               <p>Tax : ${tax} </p>
               <p>Grand Total : ${grandTotal.toFixed(2)}</p>
                             
                              </div>
               );
};

export default Cart;