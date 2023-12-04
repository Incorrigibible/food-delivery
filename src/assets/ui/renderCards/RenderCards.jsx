
import { useState } from "react";
import { Card } from "../card/Card";

export const RenderCards = ({ menu, currentCategory }) => {
  const categoryItems = menu[currentCategory] || [];

  const [currentCardData, setCurrentCardData] = useState(menu);

  const handleCardDataChange = (newCardData) => {
    setCurrentCardData(newCardData);
  }

  return (
    <ul style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr 1fr',  
      gap: '10px',
    }}>
      {categoryItems.map((item, index) => (
        
        <li key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box' }}>
          <Card item={item} index={index} currentCategory={currentCategory} menu={menu} onUpdateCardData={handleCardDataChange}/>
        </li>
      ))}
    </ul>
  );
};
