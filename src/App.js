import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { ProductProvider } from './context/ProductContext'; // Import ProductProvider
import AppRoutes from './routes/Routes';
import Footer from './components/Footer';

function App() {
    return (
        <OrderProvider>
            <CartProvider>
                <ProductProvider> {/* Wrap with ProductProvider */}
                    <Router>
                        <AppRoutes />
                        <Footer />
                    </Router>
                </ProductProvider>
            </CartProvider>
        </OrderProvider>
    );
}

export default App;
