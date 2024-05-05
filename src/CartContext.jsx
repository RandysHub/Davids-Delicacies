import { createContext, useReducer } from 'react'

export const CartContext = createContext({
  items: [],
  handleAddToCart: () => { },
  handleDeleteFromCart: () => { },
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
    //I dont remember why this is here
    // return { items: updatedItems }

  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer,
    {
      items: []
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

  const ctxValue = {
    items: shoppingCart.items,
    handleAddToCart,
    handleDeleteFromCart
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}
