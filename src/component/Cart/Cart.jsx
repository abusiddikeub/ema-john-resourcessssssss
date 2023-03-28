import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
               //  const cart= props.cart    ///option 1
               // const {cart} = props;  option 2

 console.log(cart);
              

 let total = 0;
 for(const product of cart){
                console.log(product);
                total =total + product.price;
 }


               return (
                              <div className='cart'>
                                <h3>Order summery</h3>
               <p>Selected item : {cart.length}</p>
               <p>Total price :{total}</p>
               <p>Total Shipping :</p>
               <p>Tax </p>
               <p>Grand Total :</p>
                             
                              </div>
               );
};

export default Cart;