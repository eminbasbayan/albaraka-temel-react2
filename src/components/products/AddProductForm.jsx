import { useState } from 'react';
import Button from '../ui/Button';
import './AddProductForm.css';
import ProductInput from './ProductInput';

const productInputs = [
  {
    text: 'Title',
    placeholder: 'Bir ürün ismi yazınız...',
    type: 'text',
    name: 'title',
  },
  {
    text: 'Image URL',
    placeholder: 'Bir ürün görsel linki yazınız...',
    type: 'text',
    name: 'image',
  },
  {
    text: 'Price',
    placeholder: 'Bir ürün fiyatı yazınız...',
    type: 'number',
    name: 'price',
  },
  {
    text: 'Category',
    placeholder: 'Bir ürün kategorisi yazınız...',
    type: 'text',
    name: 'category',
  },
  {
    text: 'Description',
    placeholder: 'Bir ürün açıklaması yazınız...',
    type: 'text',
    name: 'description',
  },
];

const initialInputState = {
  title: '',
  image: '',
  price: '',
  description: '',
  category: '',
};

const AddProductForm = ({ addNewProduct, setIsShowModal }) => {
  const [product, setProduct] = useState(initialInputState);

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
    setProduct(initialInputState);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput
          {...input}
          handleChange={handleChange}
          value={product[input.name]}
        />
      ))}
      <Button color="success" size="lg">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
};

export default AddProductForm;
