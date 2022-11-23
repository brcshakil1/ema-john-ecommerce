import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props)

    const {img, name, seller, price, stock} = props.product;

    return (
        <div className='product'>
           <div className="product__img">
                <img src={img} alt="" />
           </div>
           <div className='product__items'>
                <h4 className='items_header'>{name}</h4>
                <br />
                <p><small>by:</small>{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>

           </div>
        </div>
    );
};

export default Product;