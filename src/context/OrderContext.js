import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrderHistory = () => {
    return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]); // Initialize orders as an empty array

    const addOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
