import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

function AddProduct() {
    const { setProducts } = useContext(ProductContext);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '', category: '' });

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newId = Date.now(); // Generate a unique ID
        setProducts(prevProducts => [...prevProducts, { ...newProduct, id: newId }]);
        setNewProduct({ name: '', price: '', imageUrl: '', category: '' }); // Reset form
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
                <input type="number" placeholder="Product Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
                <input type="text" placeholder="Image URL" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} required />
                <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
