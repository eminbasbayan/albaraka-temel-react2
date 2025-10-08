import { useReducer } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';

import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Loading from '../ui/Loading';

import { initialState, reducerFunction } from './productReducer';

import './Products.css';

function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  async function fetchProducts() {
    dispatch({ type: 'SHOW_LOADING' });

    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch({ type: 'FETCH_PRODUCTS', data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="products mt-4">
      <h2>Products Component</h2>

      <AddProductForm
        addNewProduct={(newProduct) =>
          dispatch({ type: 'ADD_PRODUCT', newProduct })
        }
        setIsShowModal={() => dispatch({ type: 'SHOW_MODAL' })}
      />

      <Button color={'primary'} onClick={fetchProducts} addClass="mb-4">
        Ürünleri Getir
      </Button>

      <div className="products-wrapper">
        {state.isShowLoading && <Loading />}
        {!state.products.length && !state.isShowLoading && <p>Hiç ürün yok!</p>}
        {state.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...product}
              onDeleteProduct={(productId) =>
                dispatch({ type: 'DELETE_PRODUCT', productId })
              }
            />
          );
        })}
      </div>

      {state.isShowModal && (
        <Modal
          title="Form Validation Hatası"
          description="Inputlar boş olamaz!"
          setIsShowModal={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
}

export default Products;
