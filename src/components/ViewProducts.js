import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

function ViewProducts() {
    const { products, setProducts } = useContext(ProductContext);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h2>All Products</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <ProductCard product={product} />
                        <p>Quantity Sold: {product.quantitySold}</p>
                        <p>Quality: {product.quality}</p>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewProducts;