import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getCart');
      setCartItems(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId}>
              <p>Product ID: {item.productId}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
