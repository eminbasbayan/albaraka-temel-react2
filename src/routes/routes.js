import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/products',
    Component: ProductsPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/cart',
    Component: CartPage,
  },
   {
    path: '/product-details',
    Component: ProductDetailPage,
  },
]);

export default router;
