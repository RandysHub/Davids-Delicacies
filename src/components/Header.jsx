import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import Cart from './Cart'
import { CartContext } from '../CartContext'
import { ProgressContext } from '../ProgressContext'

export default function Header() {

  const { items } = useContext(CartContext);
  const { showCart } = useContext(ProgressContext)
  const totalItems = items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0)

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} />
        <h1>David's Delicacies</h1>
      </div>
      <nav>
        <Button onClick={showCart} style='text-button'>{`Cart (${totalItems})`}</Button>
      </nav>
      <Cart />
    </header>
  )
}
