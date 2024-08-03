import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/products', {
        product_name: productName,
        category,
        price,
        discount,
      });
      // Handle successful creation
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Discount:</label>
        <input
          type="number"
          step="0.01"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
