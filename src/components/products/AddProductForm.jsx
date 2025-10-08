import { useState } from 'react';
import Button from '../ui/Button';
import './AddProductForm.css';

const AddProductForm = ({ addNewProduct, setIsShowModal }) => {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    description: '',
    category: '',
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!formValid) {
      return setIsShowModal();
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };
    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Title: {product.title}
        <input
          type="text"
          placeholder="Bir ürün ismi yazınız..."
          onChange={handleChange}
          name="title"
        />
      </label>
      <label>
        Image URL: {product.image}
        <input
          type="text"
          placeholder="Bir ürün görsel linki yazınız..."
          onChange={handleChange}
          name="image"
        />
      </label>
      <label>
        Price: {product.price}
        <input
          type="number"
          placeholder="Bir ürün fiyatı yazınız..."
          onChange={handleChange}
          name="price"
        />
      </label>
      <label>
        Description: {product.description}
        <input
          type="text"
          placeholder="Bir ürün açıklaması yazınız..."
          onChange={handleChange}
          name="description"
        />
      </label>
      <label>
        Category: {product.category}
        <input
          type="text"
          placeholder="Bir ürün kategorisi yazınız..."
          onChange={handleChange}
          name="category"
        />
      </label>

      <Button color="success" size="lg">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
};

export default AddProductForm;
