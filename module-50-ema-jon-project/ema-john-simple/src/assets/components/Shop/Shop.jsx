import React, { useState, useEffect } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                    key={product.id}
                    product={product}
                    ></Products>)
                }
            </div>
            <div className='card-container'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;
