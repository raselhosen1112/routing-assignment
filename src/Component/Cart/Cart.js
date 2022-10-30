import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {name,Rating,text, img}=props.cart;
    return (
     
        <div className='container'>
             <img src={img} alt=''></img>
            <h3>{name}</h3>
          <h4>Rating: <span className='rating'>{Rating}</span> </h4>
          <p><small>{text}</small></p>
        </div>
    );
};

export default Cart;