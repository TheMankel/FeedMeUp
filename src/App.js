import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const closeCartHandler = () => {
    setCartVisible(false);
  };

  const openCartHandler = () => {
    setCartVisible(true);
  };

  return (
    <>
      {cartVisible && <Cart onClose={closeCartHandler} />}
      <Header onShow={openCartHandler} />
      <Meals />
    </>
  );
}

export default App;
