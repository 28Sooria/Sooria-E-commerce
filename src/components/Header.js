import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import the Logo component

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
        // Implement search functionality here
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <Logo />
                </Link>
                <div className="d-flex">
                    <form className="search-bar" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-success" type="submit">SEARCH</button>
                    </form>
                    <div className="dropdown">
                        <button
                            className="btn btn-outline-success dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            ALL CATEGORIES
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/products">Fruits</Link></li>
                            <li><Link className="dropdown-item" to="/products">Vegetables</Link></li>
                            <li><Link className="dropdown-item" to="/products">Dairy</Link></li>
                            <li><Link className="dropdown-item" to="/products">Snacks</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/products">Products</Link>
                <Link className="nav-link" to="/cart">Cart</Link>
                <Link className="nav-link" to="/checkout">Checkout</Link>
                <Link className="nav-link" to="/order-history">Order History</Link>
                <Link className="nav-link" to="/admin">Admin Panel</Link>
                {/* <Link className="nav-link" to="/wishlist">Wishlist</Link>  */}
            </div>
        </nav>
    );
}

export default Header;
