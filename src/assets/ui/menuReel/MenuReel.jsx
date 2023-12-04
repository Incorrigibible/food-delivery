import React, { useEffect, useState } from "react";

export const MenuReel = ({ menu, onCategoryChange }) => {
  const categories = Object.keys(menu);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    if (currentCategory === undefined) {
      setCurrentCategory(categories[0]);
      onCategoryChange(categories[0]);
    }
  }, [categories, currentCategory, onCategoryChange]);

  return (
    <div>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          style={{
            backgroundColor: currentCategory === category ? "green" : "yellow"
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );

  function handleCategoryClick(category) {
    setCurrentCategory(category);
    onCategoryChange(category);
  }
};
