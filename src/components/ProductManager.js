import React, { useEffect, useState } from 'react';
import productsData from '../products.json'; // Adjust the path as necessary

function ProductManager() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '', category: '' });
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    const handleChange = (id, field, value) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, [field]: value } : product
        ));
    };

    const handleEdit = (product) => {
        setNewProduct(product);
        setEditProductId(product.id);
    };

    const handleSave = () => {
        if (editProductId) {
            setProducts(products.map(product => 
                product.id === editProductId ? { ...newProduct, id: editProductId } : product
            ));
            setEditProductId(null);
        } else {
            const newId = products.length ? Math.max(products.map(p => p.id)) + 1 : 1; // Generate a new unique ID
            setProducts([...products, { ...newProduct, id: newId }]);
        }
        setNewProduct({ name: '', price: '', imageUrl: '', category: '' }); // Reset form
    };

    return (
        <div>
            <h2>Product Manager</h2>
            <div>
                <h3>{editProductId ? 'Edit Product' : 'Add New Product'}</h3>
                <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                <input type="text" placeholder="Image URL" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} />
                <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>
                                <input
                                    type="text"
                                    value={product.name}
                                    onChange={(e) => handleChange(product.id, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.price}
                                    onChange={(e) => handleChange(product.id, 'price', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.category}
                                    onChange={(e) => handleChange(product.id, 'category', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.description}
                                    onChange={(e) => handleChange(product.id, 'description', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSave}>Save Changes</button>
        </div>
    );
}

export default ProductManager;
