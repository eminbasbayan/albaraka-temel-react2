import { useState } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';

import productsData from '../../data/productsData';

import './Products.css';
import Modal from '../ui/Modal';

function Products() {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);

  function addNewProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  function deleteProduct(productId) {
    if (confirm('Ürünü silmek istediğinize emin misiniz?')) {
      const filteredProducts = products.filter(
        (product) => product.id !== productId
      );

      setProducts(filteredProducts);
    }
  }

  return (
    <div className="products">
      <h2>Products Component</h2>

      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />

      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              onDeleteProduct={deleteProduct}
            />
          );
        })}
      </div>

      {isShowModal && (
        <Modal
          title="Form Validation Hatası"
          description="Inputlar boş olamaz!"
          setIsShowModal={setIsShowModal}
        />
      )}
    </div>
  );
}

export default Products;
