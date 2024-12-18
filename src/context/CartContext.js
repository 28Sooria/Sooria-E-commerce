import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]); // State for order history

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const checkout = (paymentMethod, upiId, bankDetails) => {
        const order = {
            id: Date.now(),
            items: cart.map(item => ({
                ...item,
                imageUrl: item.imageUrl // Include image URL
            })),
            totalPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            paymentMethod,
            upiId,
            bankDetails,
        };
        
        // Add the order to the orders state
        setOrders((prevOrders) => [...prevOrders, order]);
        setCart([]); // Clear the cart after checkout
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout, orders }}>
            {children}
        </CartContext.Provider>
    );
};
