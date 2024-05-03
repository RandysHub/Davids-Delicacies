import React from 'react'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../shopping-cart-context';

function Item({ meal }) {
  const { items, handleAddToCart } = useContext(CartContext);

  return (
    <li className='meal-item'>
      <img src={`http://localhost:3000/${meal.image}`} />
      <div>
        <h3>{meal.name}</h3>
        <p className='meal-item-description'>{meal.desc}</p>
        <p className='meal-item-price'>${meal.price}</p>
      </div>
      <p className='meal-item-actions'>
        <Button onClick={() => handleAddToCart(meal)} style='text-button'>Add to cart</Button>
      </p>
    </li>
  )
}

export default Item
