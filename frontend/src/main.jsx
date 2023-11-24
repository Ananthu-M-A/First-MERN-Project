import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import WishListPage from './pages/WishListPage.jsx';
import CartPage from './pages/CartPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import WalletPage from './pages/WalletPage.jsx';
import ViewProductPage from './pages/ViewProductPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import AdminHomePage from './pages/AdminHomePage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/wishlist' element={<WishListPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/viewProduct' element={<ViewProductPage />} />
      </Route>
      <Route path='/adminLogin' element={<AdminLoginPage />} />
      <Route path='/adminHome' element={<AdminHomePage />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);