import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart.jsx";
import CartContextProvider from "./CartContext.jsx";
import ProgressContextProvider from "./ProgressContext.jsx";

function App() {
  return (
    <ProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Menu />
        <Cart />
      </CartContextProvider>
    </ProgressContextProvider>
  );
}

export default App;
