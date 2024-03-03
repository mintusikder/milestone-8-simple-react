import React, { useState, useEffect } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])
   
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handelAddToCard = (product) =>{
        const newCard = [...card, product]
        setCard(newCard)
      }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                    key={product.id}
                    product={product}
                    handelAddToCard={handelAddToCard}

                    ></Products>)
                }
            </div>
            <div className='card-container'>
                <h2>Order Summary</h2>
                <p>Itemes: {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;
