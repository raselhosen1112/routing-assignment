import React from 'react';
import './Review.css';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';

const Review = (props) => {
  const [carts, setCarts]=useCart();
    return (
        <div className='review-container-main'>
          {
            carts.map(cart=><Cart cart={cart}> </Cart>)
          }
        </div>
    );
};

export default Review;