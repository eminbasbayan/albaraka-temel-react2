import { useState } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';

import productsData from '../../data/productsData';

import './Products.css';

function Products() {
  const [titleState, setTitleState] = useState('Title');

  return (
    <div className="products">
      <h2>Products Component</h2>

      <AddProductForm />

      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              titleState={titleState}
              setTitleState={setTitleState}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
