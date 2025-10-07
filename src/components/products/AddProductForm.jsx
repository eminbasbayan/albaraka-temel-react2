import Button from '../ui/Button';
import './AddProductForm.css';

const AddProductForm = () => {
  return (
    <form className="add-product-form">
      <label>
        Title:
        <input type="text" placeholder="Bir ürün ismi yazınız..." />
      </label>
      <label>
        Image URL:
        <input type="text" placeholder="Bir ürün görsel linki yazınız..." />
      </label>
      <label>
        Price:
        <input type="number" placeholder="Bir ürün fiyatı yazınız..." />
      </label>
      <label>
        Description:
        <input type="text" placeholder="Bir ürün açıklaması yazınız..." />
      </label>
      <label>
        Category:
        <input type="text" placeholder="Bir ürün kategorisi yazınız..." />
      </label>

      <Button color="success" size="lg">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
};

export default AddProductForm;
