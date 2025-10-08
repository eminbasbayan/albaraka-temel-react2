import { useState } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';

import Modal from '../ui/Modal';
import './Products.css';
import Button from '../ui/Button';
import Loading from '../ui/Loading';

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);

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

  function fetchProducts() {
    if (products.length > 0) return alert('Ürünler zaten yüklendi!');
    setProducts([]);
    setIsShowLoading(true);

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => setIsShowLoading(false));
  }

  return (
    <div className="products mt-4">
      <h2>Products Component</h2>

      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />

      <Button color={'primary'} onClick={fetchProducts} addClass="mb-4">
        Ürünleri Getir
      </Button>

      <div className="products-wrapper">
        {isShowLoading && <Loading />}
        {!products.length && !isShowLoading && <p>Hiç ürün yok!</p>}
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
              onAddToCart={onAddToCart}
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
