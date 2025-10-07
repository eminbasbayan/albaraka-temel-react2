import Products from './components/products/Products';
import Button from './components/ui/Button';

function App() {
  return (
    <div>
      <Button color="primary" title="Sepete Ekle" disabled />
      <Button color="danger" size="lg" title="Ürünü Sil" />
      <Button color="success" size="sm" title="Yeni Ürün Oluştur" />
      <Button link size="sm" title="Yeni Ürün Oluştur" />
      {/* <Products /> */}
    </div>
  );
}

export default App;
