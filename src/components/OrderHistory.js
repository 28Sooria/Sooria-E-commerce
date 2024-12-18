import React from 'react';
import { useOrderHistory } from '../context/OrderContext';

function OrderHistory() {
    const { orders } = useOrderHistory();

    return (
        <div className="container">
            <h2>Order History</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Total Price</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>₹{order.totalPrice}</td>
                                <td>{order.paymentMethod}</td>
                                <td>{new Date(order.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default OrderHistory;
