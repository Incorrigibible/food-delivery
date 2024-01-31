
import { useState, useEffect } from "react";
import { Card } from "../card/Card";
import {v4} from 'uuid'

export const RenderCards = ({ menu, currentCategory, handleAddToCart }) => {
  const categoryItems = menu[currentCategory] || [];
  const style = {
    margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box'
  }
  return (
    <ul style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr 1fr',  
      gap: '10px',
    }}>
      {categoryItems.map((item, index) => (
        
        <div key={v4()} style={style}>
          <Card item={item}  currentCategory={currentCategory} menu={menu} handleAddToCart={handleAddToCart}/>
        </div>
      ))}
    </ul>
  );
};
