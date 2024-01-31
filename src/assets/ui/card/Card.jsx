import React, { useState, useEffect } from "react";

export const Card = (props) => {
  const { item, handleAddToCart } = props;
  const initialPrice = item.price || 0;

  const [currentItem, setCurrentItem] = useState({ ...item, price: initialPrice });
  const [currentPrice, setCurrentPrice] = useState(initialPrice);

  const handleAddToCartClick = () => {
    handleAddToCart(currentItem);
  };

  const handlePizzaChange = (sizeOrDough) => {
    if (sizeOrDough === currentItem.size || sizeOrDough === currentItem.doughType) {
      return;
    }

    const updatedItem = { ...currentItem };

    switch (sizeOrDough) {
      case "традиционное":
      case "тонкое":
        updatedItem.doughType = sizeOrDough;
        break;
      case 26:
      case 30:
      case 38:
        updatedItem.size = `${sizeOrDough}см`;
        break;
      default:
        break;
    }

    setCurrentItem(updatedItem);
  };

  useEffect(() => {
    let priceChange = 0;

    switch (currentItem.size) {
      case "26см":
        priceChange = currentItem.doughType === "тонкое" ? -50 : 0;
        break;
      case "30см":
        priceChange = currentItem.doughType === "традиционное" ? 50 : 0;
        break;
      case "38см":
        priceChange = currentItem.doughType === "традиционное" ? 100 : 50;
        break;
      default:
        break;
    }

    const newPrice = initialPrice + priceChange;
    setCurrentPrice(newPrice);
    setCurrentItem((prevItem) => ({ ...prevItem, price: newPrice }));
  }, [currentItem.size, currentItem.doughType]);

  return (
    <li style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px" }}>
      <img src={item.imgPath} alt={item.name} style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%" }} />
      <h3>{item.name}</h3>
      {item.doughType && (
        <div>
          <div style={{ display: "flex", width: "100%" }}>
            <button onClick={() => handlePizzaChange("традиционное")} style={{ flex: "1", backgroundColor: currentItem.doughType === "традиционное" ? "lightgreen" : "" }}>
              традиционное
            </button>
            <button onClick={() => handlePizzaChange("тонкое")} style={{ flex: "1", backgroundColor: currentItem.doughType === "тонкое" ? "lightgreen" : "" }}>
              тонкое
            </button>
          </div>
          <div style={{ display: "flex" }}>
            {[26, 30, 38].map((size) => (
              <button key={size} onClick={() => handlePizzaChange(size)} style={{ backgroundColor: currentItem.size === `${size}см` ? "lightblue" : "" }}>
                {`${size}см`}
              </button>
            ))}
          </div>
        </div>
      )}
      <p>Price: {currentPrice}</p>
      <button onClick={handleAddToCartClick}>
        Добавить
      </button>
    </li>
  );
};
