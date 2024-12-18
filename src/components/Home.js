import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton'; // Import BackButton

function Home() {
    return (
        <div className="container">
            <h1 className="text-center my-4 welcome-message">Welcome to Grocery Store</h1>
            <p className="text-center">
                Your one-stop shop for fresh groceries delivered to your doorstep. 
                Explore our wide range of products and enjoy great deals!
            </p>

            <h2 className="text-center my-4">Shop by Category</h2>
            <div className="row">
                <div className="col-md-3">
                    <div className="card category-card">
                        <img src={require('../img/fruits.jpg')} className="card-img-top" alt="Fruits" />
                        <div className="card-body">
                            <h5 className="card-title">Fruits</h5>
                            <p className="card-text">Fresh and organic fruits.</p>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card category-card">
                        <img src={require('../img/vegetables.jpg')} className="card-img-top" alt="Vegetables" />
                        <div className="card-body">
                            <h5 className="card-title">Vegetables</h5>
                            <p className="card-text">Freshly picked vegetables.</p>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card category-card">
                        <img src={require('../img/dairy.jpg')} className="card-img-top" alt="Dairy" />
                        <div className="card-body">
                            <h5 className="card-title">Dairy</h5>
                            <p className="card-text">Quality dairy products.</p>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card category-card">
                        <img src={require('../img/snacks.jpg')} className="card-img-top" alt="Snacks" />
                        <div className="card-body">
                            <h5 className="card-title">Snacks</h5>
                            <p className="card-text">Delicious snacks for every occasion.</p>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <h2 className="text-center my-4">Featured Products</h2>
            <div className="row"> */}
                {/* You can add featured products here, similar to the product cards */}
                {/* Example: */}
                {/* <div className="col-md-3">
                    <div className="card">
                        <img src="path/to/featured-product.jpg" className="card-img-top" alt="Featured Product" />
                        <div className="card-body">
                            <h5 className="card-title">Featured Product</h5>
                            <p className="card-text">Description of the featured product.</p>
                            <Link to="/products" className="btn btn-success">View Product</Link>
                        </div>
                    </div>
                </div> */}
                {/* Repeat for more featured products */}
            {/* </div> */}
        </div>
    );
}

export default Home;