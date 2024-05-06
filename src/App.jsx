import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart.jsx";
import CartContextProvider from "./CartContext.jsx";
import ProgressContextProvider, { ProgressContext } from "./ProgressContext.jsx";
import { useContext } from "react";
import OrderForm from "./components/OrderForm.jsx";

function App() {
  const { progress } = useContext(ProgressContext);
  return (
    <ProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Menu />
        <Cart />
        <OrderForm />
      </CartContextProvider>
    </ProgressContextProvider>
  );
}

export default App;
