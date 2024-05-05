import { useContext } from 'react'
import { CartContext } from '../CartContext.jsx'
import Modal from './Modal';
import Button from './UI/Button';
import { ProgressContext } from '../ProgressContext.jsx';

export default function Cart() {
  const { items, handleDeleteFromCart } = useContext(CartContext);
  const { progress, showCart, hideCart, showCheckout } = useContext(ProgressContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    totalPrice + item.quantity * item.price
  }, 0)
  return (
    <Modal style='cart' open={progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {
          items.map(item => <li key={item.id} onClick={() => { handleDeleteFromCart(item) }}>
            {`${item.name}: ${item.quantity}`} </li>)
        }
      </ul>
      <p className='cart-total'>`$${cartTotal}`</p>
      <p className='modal-actions'>
        <Button style='text-only' onClick={hideCart}>Close</Button>
        <Button onClick={showCheckout}>Go To Checkout</Button>
      </p>
    </Modal>
  )
}
