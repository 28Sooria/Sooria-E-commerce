import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import './Wishlist.css'; // Create a CSS file for styling

function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>No items in your wishlist.</p>
            ) : (
                wishlist.map(item => (
                    <div key={item.id} className="wishlist-item">
                        <img src={item.imageUrl} alt={item.name} />
                        <div>
                            <h5>{item.name}</h5>
                            <p>Price: ₹{item.price}</p>
                            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Wishlist;
