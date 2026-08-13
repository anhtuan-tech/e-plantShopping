import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { name: "Snake Plant", image: "https://via.placeholder.com/150", cost: 15 },
        { name: "Spider Plant", image: "https://via.placeholder.com/150", cost: 12 }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        { name: "Lavender", image: "https://via.placeholder.com/150", cost: 20 },
        { name: "Mint", image: "https://via.placeholder.com/150", cost: 10 }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { name: "Aloe Vera", image: "https://via.placeholder.com/150", cost: 18 },
        { name: "Cactus", image: "https://via.placeholder.com/150", cost: 14 }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true
    }));
  };

  return (
    <div>
      {/* Navbar bắt buộc */}
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/plants">Plants</a>
        <a href="/cart">Cart</a>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h2>{category.category}</h2>
            <div className="plant-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="plant-card" key={plantIndex}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.cost}</p>
                  <button 
                    disabled={addedToCart[plant.name]} 
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;