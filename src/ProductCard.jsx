import './ProductCard.css';

function ProductCard() {
  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png';
  const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
  const price = 50;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <div className="product-info">
        <strong className="product-title">{title}</strong>

        <span className="product-price">₺{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products

// https://github.com/eminbasbayan/albaraka-temel-react2
