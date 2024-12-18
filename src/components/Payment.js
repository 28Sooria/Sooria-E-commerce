import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrderHistory } from '../context/OrderContext';
import './Payment.css';

function Payment() {
    const { cart, checkout } = useCart();
    const { addOrder } = useOrderHistory();
    const location = useLocation();
    const navigate = useNavigate();
    const { totalPrice } = location.state || { totalPrice: 0 };
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [upiId, setUpiId] = useState('');
    const [bankDetails, setBankDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

    const handlePayment = () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add products to your cart before proceeding to payment.');
            return;
        }
        if (paymentMethod === 'upi' && !upiId) {
            alert('Please enter your UPI ID.');
            return;
        }
        if ((paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && !bankDetails.cardNumber) {
            alert('Please enter your bank details.');
            return;
        }

        // Simulate payment processing
        const paymentSuccessful = true; // Replace with actual payment processing logic

        if (paymentSuccessful) {
            // Call the checkout function with the necessary details
            checkout(paymentMethod, upiId, bankDetails);

            // Create an order object
            const order = {
                id: Date.now(),
                items: cart.map(item => ({
                    ...item,
                    imageUrl: item.imageUrl // Include image URL
                })),
                totalPrice: totalPrice,
                paymentMethod,
                upiId,
                bankDetails,
            };

            // Add the order to the order history
            addOrder(order);

            alert(`Payment of ₹${totalPrice} successful using ${paymentMethod}${paymentMethod === 'upi' ? ` with UPI ID: ${upiId}` : ''}`);
            navigate('/order-history'); // Navigate to order history
        } else {
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div className="payment-container">
            <h2 className="payment-title">Payment</h2>
            <h4 className="total-amount">Total Amount: ₹{totalPrice}</h4>
            <div className="payment-methods">
                <label>
                    <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        value="debitCard"
                        checked={paymentMethod === 'debitCard'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Debit Card
                </label>
                <label>
                    <input
                        type="radio"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    UPI
                </label>
            </div>
            <button onClick={handlePayment} className="btn btn-primary">Confirm Payment</button>
        </div>
    );
}

export default Payment;
