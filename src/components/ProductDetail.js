import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard'; // Import ProductCard for displaying similar products
import './ProductDetail.css';
import { useWishlist } from '../context/WishlistContext';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const { addToWishlist } = useWishlist();

    useEffect(() => {
        const fetchProducts = async () => {
            const sampleProducts = [
                { id: 1, name: 'Small Shimla Apple', price: 89, imageUrl: require('../img/apple.jpg'), category: 'Fruits', description: 'Fresh and juicy apples.', mrp: 122 },
                { id: 2, name: 'Banana', price: 50, imageUrl: require('../img/banana.jpg'), category: 'Fruits', description: 'Ripe bananas for a quick snack.', mrp: 70 },
                { id: 3, name: 'Tomato', price: 30, imageUrl: require('../img/tomato.jpg'), category: 'Vegetables', description: 'Juicy red tomatoes.', mrp: 35 },
                { id: 4, name: 'Potato', price: 20, imageUrl: require('../img/potato.jpg'), category: 'Vegetables', description: 'Versatile and starchy potatoes.', mrp: 30 },
                { id: 5, name: 'Onion', price: 25, imageUrl: require('../img/onion.jpg'), category: 'Vegetables', description: 'Versatile and flavorful onions.', mrp: 45 },
                { id: 6, name: 'Mango', price: 150, imageUrl: require('../img/mango.jpg'), category: 'Fruits', description: 'Sweet and juicy mangoes.', mrp: 150 },
                { id: 7, name: 'Carrot', price: 40, imageUrl: require('../img/carrot.jpg'), category: 'Vegetables', description: 'Crunchy and sweet carrots.', mrp: 45 },
                { id: 8, name: 'Cabbage', price: 35, imageUrl: require('../img/cabbage.jpg'), category: 'Vegetables', description: 'Fresh and crunchy cabbage.', mrp: 35 },
                { id: 9, name: 'Rice', price: 80, imageUrl: require('../img/rice.jpg'), category: 'Grains', description: 'High-quality rice.', mrp: 100 },
                { id: 10, name: 'Wheat', price: 70, imageUrl: require('../img/wheat.jpg'), category: 'Grains', description: 'High-quality wheat.', mrp: 90 },
                { id: 11, name: 'Orange', price: 90, imageUrl: require('../img/orange.jpg'), category: 'Fruits', description: 'Sweet and tangy oranges.', mrp: 80 },
                { id: 12, name: 'Grapes', price: 120, imageUrl: require('../img/grapes.jpg'), category: 'Fruits', description: 'Fresh and sweet grapes.', mrp: 120 },
                { id: 13, name: 'Spinach', price: 30, imageUrl: require('../img/spinach.jpg'), category: 'Vegetables', description: 'Fresh and healthy spinach.', mrp: 25 },
                { id: 14, name: 'Bell Pepper', price: 60, imageUrl: require('../img/bellpepper.jpg'), category: 'Vegetables', description: 'Colorful and sweet bell peppers.', mrp: 70 },
                { id: 15, name: 'Chickpeas', price: 50, imageUrl: require('../img/chickpeas.jpg'), category: 'Grains', description: 'High-quality chickpeas.', mrp: 60 },
                { id: 16, name: 'Lentils', price: 40, imageUrl: require('../img/lentils.jpg'), category: 'Grains', description: 'High-quality lentils.', mrp: 50 },
                { id: 17, name: 'Pineapple', price: 200, imageUrl: require('../img/pineapple.jpg'), category: 'Fruits', description: 'Tropical and tangy pineapples.', mrp: 95 },
                { id: 18, name: 'Strawberries', price: 250, imageUrl: require('../img/strawberries.jpg'), category: 'Fruits', description: 'Sweet and juicy strawberries.', mrp: 160 },
                { id: 19, name: 'Garlic', price: 30, imageUrl: require('../img/garlic.jpg'), category: 'Vegetables', description: 'Pungent and aromatic garlic.', mrp: 55 },
                { id: 20, name: 'Cucumber', price: 25, imageUrl: require('../img/cucumber.jpg'), category: 'Vegetables', description: 'Cool and crisp cucumbers.', mrp: 30 },
                { id: 21, name: 'Milk', price: 60, imageUrl: require('../img/milk.jpg'), category: 'Dairy', description: 'Fresh and nutritious milk.', mrp: 70 },
                { id: 22, name: 'Cheese', price: 150, imageUrl: require('../img/cheese.jpg'), category: 'Dairy', description: 'Rich and creamy cheese.', mrp: 180 },
                { id: 23, name: 'Yogurt', price: 80, imageUrl: require('../img/yogurt.jpg'), category: 'Dairy', description: 'Fresh and creamy yogurt.', mrp: 100 },
                { id: 24, name: 'Chips', price: 40, imageUrl: require('../img/chips.jpg'), category: 'Snacks', description: 'Crispy and tasty chips.', mrp: 50 },
                { id: 25, name: 'Cookies', price: 100, imageUrl: require('../img/cookies.jpg'), category: 'Snacks', description: 'Delicious and crunchy cookies.', mrp: 120 },
                { id: 26, name: 'Soda', price: 30, imageUrl: require('../img/soda.jpg'), category: 'Beverages', description: 'Refreshing soda.', mrp: 40 },
                { id: 27, name: 'Juice', price: 50, imageUrl: require('../img/juice.jpg'), category: 'Beverages', description: 'Fresh and tasty juice.', mrp: 60 },
                { id: 28, name: 'Bread', price: 40, imageUrl: require('../img/bread.jpg'), category: 'Bakery', description: 'Fresh and soft bread.', mrp: 50 },
                { id: 29, name: 'Cake', price: 300, imageUrl: require('../img/cake.jpg'), category: 'Bakery', description: 'Delicious and creamy cake.', mrp: 350 },
                { id: 30, name: 'Frozen Peas', price: 70, imageUrl: require('../img/frozen_peas.jpg'), category: 'Frozen Foods', description: 'Fresh and frozen peas.', mrp: 90 },
                { id: 31, name: 'Frozen Chicken', price: 250, imageUrl: require('../img/frozen_chicken.jpg'), category: 'Frozen Foods', description: 'High-quality frozen chicken.', mrp: 300 },
                { id: 32, name: 'Frozen Pizza', price: 250, imageUrl: require('../img/frozen_pizza.jpg'), category: 'Frozen Foods', description: 'Delicious and convenient frozen pizza.', mrp: 300 },
            ];
            setAllProducts(sampleProducts);
            const foundProduct = sampleProducts.find(product => product.id === parseInt(id));
            setProduct(foundProduct);
        };
        fetchProducts();
    }, [id]);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        alert(`${product.name} added to cart!`);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, comment, rating };
        setReviews([...reviews, newReview]);
        setName('');
        setComment('');
        setRating(0);
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
        alert(`${product.name} has been added to your wishlist!`);
    };

    if (!product) return <div>Loading...</div>;

    // Get similar products (for example, products in the same category)
    const similarProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id);

    return (
        <div className="product-detail-container">
            <div className="product-detail-containers">
                <div className="product-image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <p className="weight">500 g</p>
                    <p className="price">₹{product.price} <span className="mrp">MRP: ₹{product.mrp}</span> <span className="discount">27% OFF</span></p>
                    <p>{product.description}</p>
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <button className="btn" onClick={handleAddToCart}>ADD</button>
                    <button onClick={handleAddToWishlist}>Add to Wishlist</button>
                </div>
            </div>

            <div className="reviews-section">
                <h3>Product Reviews</h3>
                <form onSubmit={handleReviewSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <div>
                        <label>Rating:</label>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} onClick={() => setRating(star)} style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}>
                                ★
                            </span>
                        ))}
                    </div>
                    <button type="submit">Submit Review</button>
                </form>

                <div className="existing-reviews">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="review">
                                <h4>{review.name} <span>({review.rating} ★)</span></h4>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>

            <div className="related-products">
                <h3>Similar Products</h3>
                <div className="row">
                    {similarProducts.map(similarProduct => (
                        <div className="col-md-3" key={similarProduct.id}>
                            <ProductCard product={similarProduct} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
