import { useContext, useEffect } from 'react'
import { CartContext } from '../CartContext.jsx'
import Modal from './Modal';
import Button from './UI/Button';
import { ProgressContext } from '../ProgressContext.jsx';
import CartItem from './CartItem.jsx';

export default function Cart() {
  const { items, handleSetTotal, total } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(ProgressContext);

  useEffect(() => {
    let caluculatedtotal = items.reduce((totalPrice, item) => {
      return totalPrice + item.quantity * item.price
    }, 0)
    handleSetTotal(caluculatedtotal);

  }, [items])
  console.log(total)
  return (
    <Modal style='cart' open={progress === 'cart'} onClose={progress === 'cart' ? hideCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {
          items.map(item => <CartItem item={item} key={item.id} >
            {`${item.name}: ${item.quantity}`} </CartItem>)
        }
      </ul>
      <p className='cart-total'>{`\$ ${total}`}</p>
      <p className='modal-actions'>
        <Button style='text-only' onClick={hideCart}>Close</Button>
        {items.length > 0 && <Button onClick={showCheckout}>Go To Checkout</Button>}
      </p>
    </Modal>
  )
}
