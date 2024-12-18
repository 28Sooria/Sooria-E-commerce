import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrderHistory } from '../context/OrderContext'; // Import the order context
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const countries = [
    { name: 'India', states: ['Maharashtra', 'Karnataka', 'Delhi'] },
    { name: 'USA', states: ['California', 'Texas', 'New York'] },
];

function Checkout() {
    const { cart, checkout } = useCart();
    const { addOrder } = useOrderHistory(); // Get the addOrder function
    const navigate = useNavigate();
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        country: '',
        state: '',
        email: '',
        phone: '',
        pinCode: '',
        orderNotes: '',
        paymentMethod: 'cod',
    });

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails({ ...billingDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate required fields
        if (!billingDetails.firstName || !billingDetails.lastName || !billingDetails.streetAddress || !billingDetails.country || !billingDetails.state || !billingDetails.email || !billingDetails.phone || !billingDetails.pinCode) {
            alert('Please fill in all required fields.');
            return;
        }

        const order = {
            id: Date.now(),
            items: cart.map(item => ({
                ...item,
                imageUrl: item.imageUrl // Include image URL
            })),
            totalPrice,
            paymentMethod: billingDetails.paymentMethod,
            date: new Date(),
        };

        // Add the order to the order history
        addOrder(order);

        if (billingDetails.paymentMethod === 'online') {
            navigate('/payment', { state: { totalPrice } });
        } else {
            checkout(billingDetails.paymentMethod, '', {});
            alert('Order placed successfully!');
        }
    };

    return (
        <div className="container">
            <BackButton />
            <h2>Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty. Add items to your cart to checkout.</p>
            ) : (
                <div>
                    <h3>Billing Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name *</label>
                            <input type="text" name="firstName" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Last Name *</label>
                            <input type="text" name="lastName" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Company Name (optional)</label>
                            <input type="text" name="companyName" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Street Address *</label>
                            <input type="text" name="streetAddress" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Country *</label>
                            <select name="country" className="form-control" required onChange={handleChange}>
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.name} value={country.name}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>State *</label>
                            <select name="state" className="form-control" required onChange={handleChange} disabled={!billingDetails.country}>
                                <option value="">Select State</option>
                                {billingDetails.country && countries.find(c => c.name === billingDetails.country).states.map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Email Address *</label>
                            <input type="email" name="email" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Pin Code *</label>
                            <input type="text" name="pinCode" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Order Notes (optional)</label>
                            <textarea name="orderNotes" className="form-control" onChange={handleChange}></textarea>
                        </div>
                        <h4>Payment Method</h4>
                        <div className="form-group">
                            <label>
                                <input type="radio" name="paymentMethod" value="cod" checked={billingDetails.paymentMethod === 'cod'} onChange={handleChange} /> Cash on Delivery
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod" value="online" checked={billingDetails.paymentMethod === 'online'} onChange={handleChange} /> Online Payment
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Place Order</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Checkout;
