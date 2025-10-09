import { useState } from 'react';
import { toast } from 'react-toastify';

import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
    toast.success('Ürün sepete eklendi!', {
      position: 'top-center',
      autoClose: 1500,
    });
  }

  function removeFromCart(cartItemId) {
    if (confirm('Emin Misiniz?')) {
      const filteredCartItems = cartItems.filter(
        (item) => item.id !== cartItemId
      );
      setCartItems(filteredCartItems);

      toast.success('Ürün sepetten silindi!', {
      position: 'bottom-center',
      autoClose: 1500,
    });
    }
  }

  return (
    <CartContext.Provider
      value={{
        fullName: 'Emin Başbayan',
        cartItems,
        onAddToCart: addToCart,
        onRemoveFromCart: removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
