import { useContext } from 'react'
import { CartContext } from '../shopping-cart-context'

export default function Cart() {
  const { items, handleDeleteFromCart } = useContext(CartContext);
  console.log(items)
  return (
    <div>{
      items.map(item => <h5 onClick={() => {
        console.log(item)
        handleDeleteFromCart(item)
      }}
      >{item.name}</h5>)

    }</div>
  )
}
