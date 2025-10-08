import Button from '../ui/Button';
import './ProductCard.css';

function ProductCard(props) {
  const { onDeleteProduct, onAddToCart, ...product } = props;
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <strong className="product-title">{product.title}</strong>
        <p className="product-description">{product.description}</p>
        <span className="product-price">₺{product.price}</span>
        <Button color="success" onClick={() => onAddToCart(product)}>
          Sepete Ekle
        </Button>
        <Button color="danger" onClick={() => onDeleteProduct(product.id)}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products

// https://github.com/eminbasbayan/albaraka-temel-react2
