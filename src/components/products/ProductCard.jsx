import { useContext } from 'react';
import Button from '../ui/Button';
import CartContext from '../../context/CartContext';

import './ProductCard.css';

function ProductCard(props) {
  const { onDeleteProduct, cart, ...product } = props;
  const data = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <strong className="product-title">{product.title}</strong>
        <p className="product-description">{product.description}</p>
        <span className="product-price">₺{product.price}</span>
        {!cart && (
          <Button color="success" onClick={() => data.onAddToCart(product)}>
            Sepete Ekle
          </Button>
        )}
        <Button
          color="danger"
          onClick={() =>
            cart
              ? data.onRemoveFromCart(product.id)
              : onDeleteProduct(product.id)
          }
        >
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products

// https://github.com/eminbasbayan/albaraka-temel-react2
