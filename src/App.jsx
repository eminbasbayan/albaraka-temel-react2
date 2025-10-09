import Login from './components/auth/Login';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Header from './components/layout/Header';
import Products from './components/products/Products';
import useCounter from './hooks/useCounter';

function App() {
  const forwardCount = useCounter(1);
  const backwardCount = useCounter(0);

  return (
    <div className="container position-relative ">
      <Header />
      {forwardCount}
      <br />
      {backwardCount}
      <Products />
      {/* <Login /> */}
    </div>
  );
}

export default App;
