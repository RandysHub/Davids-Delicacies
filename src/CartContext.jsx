import { createContext, useReducer } from 'react'

export const CartContext = createContext({
  items: [],
  total: 0,
  handleAddToCart: () => { },
  handleDeleteFromCart: () => { },
  handleSetTotal: () => { },
})


function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
    const currItem = action.payload
    const existingCartItemIndex = updatedItems.findIndex((item) => item.id === currItem.id)
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1
      }
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        ...currItem,
        quantity: 1
      })
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'DELETE_ITEM') {
    let updatedItems = [...state.items];
    const currItem = action.payload
    const existingCartItemIndex = updatedItems.findIndex((item) => item.id === currItem.id)

    let existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {

      if (existingCartItem.quantity <= 1) {
        let newItems = updatedItems.filter((item) => item.id !== existingCartItem.id)
        return { items: newItems };
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity--
        }
        updatedItems[existingCartItemIndex] = updatedItem;
        return { ...state, items: updatedItems }
      }
    }
  }

  if (action.type === 'SET_TOTAL') {

    return { ...state, total: action.payload }

  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer,
    {
      items: [],
      total: 0
    })

  function handleAddToCart(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  function handleDeleteFromCart(item) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item
    })
  }

  function handleSetTotal(val) {
    dispatch({
      type: 'SET_TOTAL',
      payload: val
    })
  }

  const ctxValue = {
    items: shoppingCart.items,
    total: shoppingCart.total,
    handleAddToCart,
    handleDeleteFromCart,
    handleSetTotal
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}
