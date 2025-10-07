import ProductCard from './ProductCard';

function Products() {
  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png';
  const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
  const price = 50;

  return (
    <div className="products">
      <h2>Products Component</h2>
      <ProductCard
        image={image}
        title={title}
        price={price}
        fullName="Emin Başbayan"
      />
    </div>
  );
}

export default Products;
