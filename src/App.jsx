import Products from './components/products/Products';
import Button from './components/ui/Button';

function App() {
  return (
    <div>
      <Button color="primary" disabled>
        Sepete Ekle
      </Button>
      <Button color="danger" size="lg">
        Ürünü Sil
      </Button>
      <Button color="success" size="sm">
        Yeni Ürün Oluştur
      </Button>
      <Button link size="sm">
        <strong>Yeni Ürün Oluştur</strong>
      </Button>
      <Button link>Yeni Ürün Ekle</Button>
      {/* <Products /> */}
    </div>
  );
}

export default App;
