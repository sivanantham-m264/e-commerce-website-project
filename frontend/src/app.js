import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>🛒 Simple E-Commerce</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(prod => (
          <div key={prod._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={prod.image} alt={prod.title} width="100" />
            <h3>{prod.title}</h3>
            <p>${prod.price}</p>
            <button onClick={() => addToCart(prod)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>🛍️ Cart</h2>
      <ul>
        {cart.map((item, i) => <li key={i}>{item.title} - ${item.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
