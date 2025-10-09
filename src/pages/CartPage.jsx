import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import CartContext from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div className="cart-page">
      <Header />
      <h1>Cart Page</h1>

      <div className="products-wrapper">
        {cartItems.map((cartItem) => (
          <ProductCard key={cartItem.id} {...cartItem}
           cart />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
