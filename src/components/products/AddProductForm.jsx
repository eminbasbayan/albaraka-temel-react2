import { useState } from 'react';
import Button from '../ui/Button';
import './AddProductForm.css';

const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  return (
    <form className="add-product-form">
      <label>
        Title: {title}
        <input
          type="text"
          placeholder="Bir ürün ismi yazınız..."
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Image URL: {image}
        <input
          type="text"
          placeholder="Bir ürün görsel linki yazınız..."
          onChange={handleImageChange}
        />
      </label>
      <label>
        Price: {price}
        <input
          type="number"
          placeholder="Bir ürün fiyatı yazınız..."
          onChange={handlePriceChange}
        />
      </label>
      <label>
        Description: {description}
        <input
          type="text"
          placeholder="Bir ürün açıklaması yazınız..."
          onChange={handleDescriptionChange}
        />
      </label>
      <label>
        Category: {category}
        <input
          type="text"
          placeholder="Bir ürün kategorisi yazınız..."
          onChange={handleCategoryChange}
        />
      </label>

      <Button color="success" size="lg">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
};

export default AddProductForm;
