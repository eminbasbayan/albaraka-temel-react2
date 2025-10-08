import CartContext from './CartContext';

function CartProvider({ children }) {
  return (
    <CartContext.Provider
      value={{
        fullName: 'Emin Başbayan',
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
