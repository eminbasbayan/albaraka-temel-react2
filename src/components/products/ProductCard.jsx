import Button from '../ui/Button';
import './ProductCard.css';

function ProductCard(props) {
  const {
    title,
    image,
    category,
    titleState,
    description,
    price,
    setTitleState,
  } = props;
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <span className="product-category">{category}</span>
        <strong className="product-title">{titleState}</strong>
        <p className="product-description">{description}</p>
        <span className="product-price">₺{price}</span>
        <Button color="success" onClick={() => setTitleState('Yeni İsim!')}>
          Ürün İsmini Değiştir!
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products

// https://github.com/eminbasbayan/albaraka-temel-react2
