import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h4>About</h4>
                    <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                </div>
                <div className="footer-section account">
                    <h4>My Account</h4>
                    <ul>
                        <li><Link to="/account">My Account</Link></li>
                        <li><Link to="/order-history">Order History</Link></li>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </div>
                <div className="footer-section helps">
                    <h4>Helps</h4>
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/terms">Terms & Condition</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section instagram">
                    <h4>Instagram</h4>
                    <div className="instagram-icons">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 All Rights Reserved</p>
                <div className="payment-icons">
                    <i className="fab fa-apple-pay"></i>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-cc-discover"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
