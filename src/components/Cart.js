import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BackButton from './BackButton';

function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const navigate = useNavigate(); // Initialize navigate for navigation
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleReturnToShop = () => {
        navigate('/'); // Navigate to the shop page
    };

    const handleProceedToCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
            return;
        }
        navigate('/checkout'); // Navigate to the checkout page
    };

    const handleApplyCoupon = () => {
        const couponCode = document.getElementById('coupon-code').value; // Get the coupon code from input
        // Implement your coupon validation logic here
        alert(`Coupon code "${couponCode}" applied!`); // Placeholder alert
    };

    return (
        <div className="cart-container">
            <BackButton />
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={item.imageUrl} alt={item.name} className="cart-image" /></td>
                                    <td>{item.name}</td>
                                    <td>₹{item.price}</td>
                                    <td>
                                        <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        {item.quantity}
                                        <button className="btn btn-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
                                    </td>
                                    <td>₹{item.price * item.quantity}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h3>Cart Total</h3>
                        <p>Subtotal: ₹{totalPrice}</p>
                        <p>Shipping: Free</p>
                        <h4>Total: ₹{totalPrice}</h4>
                    </div>
                    <div className="cart-actions">
                        <button className="btn btn-secondary" onClick={handleReturnToShop}>RETURN TO SHOP</button>
                        <button className="btn btn-primary" onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="coupon-code">
                        <input type="text" id="coupon-code" placeholder="Coupon Code" />
                        <button className="btn btn-secondary" onClick={handleApplyCoupon}>APPLY COUPON CODE</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
