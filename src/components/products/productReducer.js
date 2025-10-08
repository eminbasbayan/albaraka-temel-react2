function reducerFunction(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.data, isShowLoading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: [action.newProduct, ...state.products] };
    case 'DELETE_PRODUCT':
      if (confirm('Ürünü Silmek İstediğinize Emin Misiniz?')) {
        const filteredProducts = state.products.filter(
          (product) => product.id !== action.productId
        );
        return { ...state, products: filteredProducts };
      }
      return state;
    case 'SHOW_MODAL':
      return { ...state, isShowModal: true };
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };
    case 'SHOW_LOADING':
      return { ...state, isShowLoading: true };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  isShowModal: false,
  isShowLoading: false,
};

export { reducerFunction, initialState };
