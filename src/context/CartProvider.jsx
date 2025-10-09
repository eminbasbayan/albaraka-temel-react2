import { useState } from 'react';
import { toast } from 'react-toastify';

import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const findCartItem = cartItems.find((item) => item.id === product.id);

    if (findCartItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === findCartItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    toast.success('Ürün sepete eklendi!', {
      position: 'top-center',
      autoClose: 1500,
    });
  }

  function arttir(cartItemId) {
    const newCarItems = cartItems.map((item) => {
      if (item.id === cartItemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(newCarItems);
  }

  function azalt(cartItem) {
    console.log('click');

    if (cartItem.quantity === 1) {
      removeFromCart(cartItem.id);
    } else {
      const newCarItems = cartItems.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      setCartItems(newCarItems);
    }
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
        azalt,
        arttir
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
