import { useContext } from 'react';
import Button from '../ui/Button';
import CartContext from '../../context/CartContext';

function ProductCard(props) {
  const { onDeleteProduct, cart, ...product } = props;
  const data = useContext(CartContext);

  return (
    <div className="card h-100">
      <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column gap-2">
        <span className="badge bg-secondary text-start">{product.category}</span>
        <strong className="card-title text-truncate">{product.title}</strong>
        <p className="card-text" style={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical'
        }}>{product.description}</p>
        <span className="fw-bold">
          ₺{product.price}{' '}
          <span onClick={() => data.arttir(product.id)} className="text-primary" role="button">+</span>{' '}
          {cart && `x ${product.quantity}`}{' '}
          <span onClick={() => data.azalt(product)} className="text-danger" role="button">-</span>
        </span>
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
