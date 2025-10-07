import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        className="product-image"
      />

      <div className="product-info">
        <strong className="product-title">Title</strong>

        <span className="product-price">₺50</span>
      </div>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products


// https://github.com/eminbasbayan/albaraka-temel-react2