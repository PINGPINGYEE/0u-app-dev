import React from "react";
import "../css/ListCategory.css";

const categories = [
  { name: "Places", icon: "📍" },
  { name: "Electronics", icon: "💻" },
  { name: "Clothes", icon: "👕" },
  { name: "Shoes", icon: "👟" },
  { name: "Campings", icon: "🏕️" },
  { name: "Kids", icon: "🍼" },
  { name: "Sports", icon: "🏀" },
  { name: "Bags", icon: "👜" },
  { name: "Others", icon: "➕" },
];

const Category = () => {
  return (
    <div className="category-container">
      <header className="category-header">
        <button className="back-button">←</button>
        <h1>Category</h1>
      </header>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
