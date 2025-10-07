import { useState } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';

import productsData from '../../data/productsData';

import './Products.css';

function Products() {
  const [products, setProducts] = useState(productsData);

  function addNewProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  return (
    <div className="products">
      <h2>Products Component</h2>

      <AddProductForm addNewProduct={addNewProduct} />

      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
