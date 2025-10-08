import Login from './components/auth/Login';
import Header from './components/layout/Header';
import Products from './components/products/Products';

function App() {
  return (
    <div className="container position-relative ">
      <Header />
      <Products />
      {/* <Login /> */}
    </div>
  );
}

export default App;
