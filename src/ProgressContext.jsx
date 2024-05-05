import { createContext } from "react";
import { useState } from "react";
export const ProgressContext = createContext({
  progress: '',
  showCart: () => { },
  hideCart: () => { },
  showCheckout: () => { },
  hideCheckout: () => { }
});

export default function ProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  };

  function hideCart() {
    setUserProgress('');
  };

  function showCheckout() {
    setUserProgress('checkout');
  };

  function hideCheckout() {
    setUserProgress('');
  };


  const ctxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  }
  return (
    <ProgressContext.Provider value={ctxValue}
    >{children}</ProgressContext.Provider>
  )
}
