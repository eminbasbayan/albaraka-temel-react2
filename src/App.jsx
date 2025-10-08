import Counter from './components/Counter';
import Header from './components/layout/Header';
import Products from './components/products/Products';

function App() {
  return (
    <div className="container position-relative ">
      <Counter />
      <Header />
      <Products />
    </div>
  );
}

export default App;
