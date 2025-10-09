import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../components/NotFound';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import AdminLayout from '../layouts/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminProducts from '../pages/admin/AdminProducts';
import AdminOrders from '../pages/admin/AdminOrders';
import AdminCustomers from '../pages/admin/AdminCustomers';
import AdminSettings from '../pages/admin/AdminSettings';

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
        path: '/about',
        Component: AboutPage,
      },
      {
        path: '/contact',
        Component: ContactPage,
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
    path: '/admin',
    Component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        Component: AdminDashboard,
      },
      {
        path: 'products',
        Component: AdminProducts,
      },
      {
        path: 'orders',
        Component: AdminOrders,
      },
      {
        path: 'customers',
        Component: AdminCustomers,
      },
      {
        path: 'settings',
        Component: AdminSettings,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default router;
