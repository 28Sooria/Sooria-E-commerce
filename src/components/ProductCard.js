import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [animationClass, setAnimationClass] = useState('slide-in');

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className={`card ${animationClass}`} style={{ width: '100%', margin: '10px' }}>
            <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
                <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
