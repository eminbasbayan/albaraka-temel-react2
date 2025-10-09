import  { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const toplamDeger = cartItems.reduce((toplam, item) => {
    return toplam + item.quantity * item.price;
  }, 0);

  function ToplamDegerler() {
    return (
      <div>
        {cartItems.length > 0 && (
          <h3 className="mt-4 text-end">Sepet Toplam: {toplamDeger}</h3>
        )}
      </div>
    );
  }

  function Cart() {
    return (
      <div className="products-wrapper">
        {!cartItems.length && <h3>Sepette Hiç Ürün Yok!</h3>}
        {cartItems.length > 0 &&
          cartItems.map((cartItem) => (
            <ProductCard key={cartItem.id} {...cartItem} cart />
          ))}
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>

      <Cart />

      <ToplamDegerler />
    </div>
  );
};

export default CartPage;
