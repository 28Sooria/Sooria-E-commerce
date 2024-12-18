import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import BackButton from './BackButton';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [sortOrder, setSortOrder] = useState('default'); // New state for sorting

    useEffect(() => {
        const fetchProducts = async () => {
            const sampleProducts = [
                { id: 1, name: 'Apple', price: 100, imageUrl: require('../img/apple.jpg'), category: 'Fruits' },
                { id: 2, name: 'Banana', price: 50, imageUrl: require('../img/banana.jpg'), category: 'Fruits' },
                { id: 3, name: 'Tomato', price: 30, imageUrl: require('../img/tomato.jpg'), category: 'Vegetables' },
                { id: 4, name: 'Potato', price: 20, imageUrl: require('../img/potato.jpg'), category: 'Vegetables' },
                { id: 5, name: 'Onion', price: 25, imageUrl: require('../img/onion.jpg'), category: 'Vegetables' },
                { id: 6, name: 'Mango', price: 150, imageUrl: require('../img/mango.jpg'), category: 'Fruits' },
                { id: 7, name: 'Carrot', price: 40, imageUrl: require('../img/carrot.jpg'), category: 'Vegetables' },
                { id: 8, name: 'Cabbage', price: 35, imageUrl: require('../img/cabbage.jpg'), category: 'Vegetables' },
                { id: 9, name: 'Rice', price: 80, imageUrl: require('../img/rice.jpg'), category: 'Grains' },
                { id: 10, name: 'Wheat', price: 70, imageUrl: require('../img/wheat.jpg'), category: 'Grains' },
                { id: 11, name: 'Orange', price: 90, imageUrl: require('../img/orange.jpg'), category: 'Fruits' },
                { id: 12, name: 'Grapes', price: 120, imageUrl: require('../img/grapes.jpg'), category: 'Fruits' },
                { id: 13, name: 'Spinach', price: 30, imageUrl: require('../img/spinach.jpg'), category: 'Vegetables' },
                { id: 14, name: 'Bell Pepper', price: 60, imageUrl: require('../img/bellpepper.jpg'), category: 'Vegetables' },
                { id: 15, name: 'Chickpeas', price: 50, imageUrl: require('../img/chickpeas.jpg'), category: 'Grains' },
                { id: 16, name: 'Lentils', price: 40, imageUrl: require('../img/lentils.jpg'), category: 'Grains' },
                { id: 17, name: 'Pineapple', price: 200, imageUrl: require('../img/pineapple.jpg'), category: 'Fruits' },
                { id: 18, name: 'Strawberries', price: 250, imageUrl: require('../img/strawberries.jpg'), category: 'Fruits' },
                { id: 19, name: 'Garlic', price: 30, imageUrl: require('../img/garlic.jpg'), category: 'Vegetables' },
                { id: 20, name: 'Cucumber', price: 25, imageUrl: require('../img/cucumber.jpg'), category: 'Vegetables' },
                { id: 21, name: 'Milk', price: 60, imageUrl: require('../img/milk.jpg'), category: 'Dairy' },
                { id: 22, name: 'Cheese', price: 150, imageUrl: require('../img/cheese.jpg'), category: 'Dairy' },
                { id: 23, name: 'Yogurt', price: 80, imageUrl: require('../img/yogurt.jpg'), category: 'Dairy' },
                { id: 24, name: 'Chips', price: 40, imageUrl: require('../img/chips.jpg'), category: 'Snacks' },
                { id: 25, name: 'Cookies', price: 100, imageUrl: require('../img/cookies.jpg'), category: 'Snacks' },
                { id: 26, name: 'Soda', price: 30, imageUrl: require('../img/soda.jpg'), category: 'Beverages' },
                { id: 27, name: 'Juice', price: 50, imageUrl: require('../img/juice.jpg'), category: 'Beverages' },
                { id: 28, name: 'Bread', price: 40, imageUrl: require('../img/bread.jpg'), category: 'Bakery' },
                { id: 29, name: 'Cake', price: 300, imageUrl: require('../img/cake.jpg'), category: 'Bakery' },
                { id: 30, name: 'Frozen Peas', price: 70, imageUrl: require('../img/frozen_peas.jpg'), category: 'Frozen Foods' },
                { id: 31, name: 'Frozen Chicken', price: 250, imageUrl: require('../img/frozen_chicken.jpg'), category: 'Frozen Foods' },
                { id: 32, name: 'Frozen Pizza', price: 250, imageUrl: require('../img/frozen_pizza.jpg'), category: 'Frozen Foods' },
            ];
            setProducts(sampleProducts);
            setFilteredProducts(sampleProducts);
        };
        fetchProducts();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Filter products based on the search term
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(value.toLowerCase())
        );

        // Update both filtered products and suggestions
        setFilteredProducts(filtered);
        const newSuggestions = filtered; // Use the same filtered products for suggestions
        setSuggestions(newSuggestions);
    };

    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        let sortedProducts = [...filteredProducts];

        if (order === 'priceAsc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === 'priceDesc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (order === 'nameAsc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === 'nameDesc') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        setFilteredProducts(sortedProducts);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.name);
        setSuggestions([]); // Clear suggestions after selection
    };

    return (
        <div className="container">
            <BackButton />
            <h2 className="text-center my-4">Products</h2>
            <div className="mb-3">
                <label htmlFor="search" className="form-label">Search:</label>
                <input
                    type="text"
                    id="search"
                    className="form-control"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map(suggestion => (
                            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="categorySelect" className="form-label">Filter by Category:</label>
                <select
                    id="categorySelect"
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Grains">Grains</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="sortSelect" className="form-label">Sort by:</label>
                <select
                    id="sortSelect"
                    className="form-select"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    <option value="default">Default</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="nameAsc">Name: A to Z</option>
                    <option value="nameDesc">Name: Z to A</option>
                </select>
            </div>
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
