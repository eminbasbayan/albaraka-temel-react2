import { useState } from 'react';
import Header from './components/layout/Header';
import Products from './components/products/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  console.log(cartItems);

  return (
    <div className="container position-relative ">
      <Header cartItems={cartItems} />
      <Products onAddToCart={addToCart} />
    </div>
  );
}

export default App;
