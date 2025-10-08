import { useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <CartContext.Provider
      value={{
        fullName: 'Emin Başbayan',
        cartItems,
        onAddToCart: addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
