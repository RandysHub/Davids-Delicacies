import { useContext } from 'react'
import { CartContext } from '../CartContext'

export default function CartItem({ item }) {
  const { handleAddToCart, handleDeleteFromCart } = useContext(CartContext)
  return (
    <li className='cart-item'>
      <p>
        {item.name} - {item.quantity} x {item.price}
      </p>
      <p className='cart-item-actions'>
        <button onClick={() => handleDeleteFromCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleAddToCart(item)}>+</button>
      </p>
    </li>
  )
}
