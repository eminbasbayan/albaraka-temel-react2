const productCardCSS = {
  display: 'flex',
  flexDirection: 'column',
};

function ProductCard() {
  return (
    <div className="product-card" style={productCardCSS}>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        className="product-image"
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'red',
        }}
      />

      <strong className="product-title">Title</strong>

      <span className="product-price">₺50</span>
    </div>
  );
}

export default ProductCard;

// https://fakestoreapi.com/products
