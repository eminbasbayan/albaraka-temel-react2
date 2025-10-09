import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
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
        path: '/product-details/:productId',
        Component: ProductDetailPage,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default router;
