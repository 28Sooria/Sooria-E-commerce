import React from 'react';
import { Link } from 'react-router-dom';

function AdminPanel() {
    return (
        <div className="admin-panel-container">
            <h2 className="admin-panel-title">Admin Panel</h2>
            <nav className="admin-nav">
                <ul>
                    <li><Link to="/admin/products">Manage Products</Link></li>
                    <li><Link to="/admin/add-product">Add New Product</Link></li>
                    <li><Link to="/admin/view-products">View All Products</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminPanel;
