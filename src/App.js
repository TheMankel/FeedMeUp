import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const closeCartHandler = () => {
    setCartVisible(false);
  };

  const openCartHandler = () => {
    setCartVisible(true);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onClose={closeCartHandler} />}
      <Header onShow={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
