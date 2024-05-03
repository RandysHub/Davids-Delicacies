import React from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import Cart from './Cart'

export default function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} />
        <h1>David's Delicacies</h1>
      </div>
      <nav>
        <Button style='text-button'>Cart (0)</Button>
      </nav>
      <Cart />
    </header>
  )
}
