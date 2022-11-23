import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price , 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const  product = cart[i];
        total = total + product.price;
    }

   let shipping = 0;
   
   if(total > 400){
    shipping = 10.99;
   }
   else if(total > 200){
    shipping = 15.99;
   }
   else if(total > 0){
    shipping = 20.99;
   }

   const tax = total / 10;
   const grandTotal = total + shipping + Number(tax);

   const formatNumber = num => {
    const precision = num.toFixed(2);
    return precision;
   }


   
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Product Price: {total}</small></p>
            <p><small>Shipping & Handling: ${shipping}</small></p>
            <p><small>Tax & VAT: {tax}</small></p>
            <p>Total: ${formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;