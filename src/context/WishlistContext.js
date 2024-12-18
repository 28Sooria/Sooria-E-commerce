import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
    };

    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
