import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.title} className="product-image" />
      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <strong className="product-title">{props.title}</strong>
        <p className="product-description">{props.description}</p>
        <span className="product-price">₺{props.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products

// https://github.com/eminbasbayan/albaraka-temel-react2
