import React, { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

function AdminProductList() {
    const { products, setProducts } = useContext(ProductContext);

    useEffect(() => {
        // Fetch initial products if needed
    }, []);

    const handleAddProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };

    const handleEditProduct = (product) => {
        // Logic to handle editing a product
        // This could involve setting the product to a form for editing
        // For example, you might want to navigate to an edit page or open a modal
        console.log('Editing product:', product);
    };

    return (
        <div>
            <h3>Existing Products</h3>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <ProductCard product={product} />
                        <button onClick={() => handleEditProduct(product)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProductList;
