import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove Switch import
import Header from '../components/Header'; // Import Header
import Home from '../components/Home';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import OrderHistory from '../components/OrderHistory';
import AdminPanel from '../components/AdminPanel';
import AdminProductList from '../components/AdminProductList';
import Payment from '../components/Payment';
import Wishlist from '../components/Wishlist'; // Import Wishlist component
import AddProduct from '../components/AddProduct';
import ViewProducts from '../components/ViewProducts';

const AppRoutes = () => {
    return (
        <>
            <Header /> {/* Include Header here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/wishlist" element={<Wishlist />} /> {/* Add Wishlist route */}
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/admin/products" element={<AdminProductList />} />
                <Route path="/admin/add-product" element={<AddProduct />} />
                <Route path="/admin/view-products" element={<ViewProducts />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
