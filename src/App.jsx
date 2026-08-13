import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="app-container">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful houseplants.</p>
          {/* Nút này bắt buộc phải có chữ "Get Started" */}
          <button onClick={handleGetStartedClick}>Get Started</button>
          <AboutUs />
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;