import React, { useState } from "react";

export const Card = (props) => {
  const cardData = props.item;
  const [currentCardData, setCurrentCardData] = useState(props.menu);

  const handleTypeOfDoughChange = (doughType, index) => {
    const selectedCard = { ...currentCardData }; 
    const selectedCategory = selectedCard[props.currentCategory];
    const selectedItem = selectedCategory[index];
  
    // Преобразование строки с ценой в числовое значение с использованием parseInt
    if (!selectedItem.originalPrice) {
      selectedItem.originalPrice = parseInt(selectedItem.price, 10) || 0;
    }
  
    // Если тип теста не меняется, выходим из функции
    if (selectedItem.doughType === doughType) {
      return;
    }
  
    // Возврат к исходной цене, если был выбран традиционный тип теста
    if (selectedItem.doughType === 'тонкое') {
      selectedItem.price = selectedItem.originalPrice;
      delete selectedItem.originalPrice;
    }
  
    // Обновление типа теста
    selectedItem.doughType = doughType;
  
    // Вычитание 50 при выборе тонкого теста
    if (doughType === 'тонкое') {
      selectedItem.price -= 50;
    }
    // Обновление состояния с новыми данными о пицце
    setCurrentCardData({ ...selectedCard });
    console.log(currentCardData)
  };

  const handleSizeChange = (size, index) => {
    const selectedCard = { ...currentCardData }; 
    const selectedCategory = selectedCard[props.currentCategory];
    const selectedItem = selectedCategory[index];
    console.log(props.item.price)
  
    selectedItem.originalPrice = selectedItem.price;
  
    switch (size) {
      case 30:
        selectedItem.price = props.item.price + 50;
        selectedItem.size = size+'см'; 
        break;
      case 38:
        selectedItem.price = props.item.price + 100; 
        selectedItem.size = size+'см';
        break;
      case 26:
        // Для размера 26 стоимость остается без изменений
        selectedItem.price = props.item.price;
        selectedItem.size = size+'см';
       
        break;
    }
  
    // Обновление состояния с новыми данными о пицце
    setCurrentCardData({ ...selectedCard });
    console.log(currentCardData)
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <img
        src={cardData.imgPath}
        alt={cardData.name}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      />
      <h3>{cardData.name}</h3>
      {!cardData.doughType ? null : (
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <button
              onClick={() => handleTypeOfDoughChange("традиционное", props.index)}
              style={{
                flex: "1",
                backgroundColor: currentCardData[props.currentCategory][props.index].doughType === 'традиционное' ? 'lightgreen' : '',
              }}
            >
              традиционное
            </button>
            <button
              onClick={() => handleTypeOfDoughChange("тонкое", props.index)}
              style={{ flex: "1",
              backgroundColor: currentCardData[props.currentCategory][props.index].doughType === 'тонкое' ? 'lightgreen' : '',
            }}
            >
              тонкое
            </button>
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <button onClick={() => handleSizeChange(26, props.index)}
            style={{
              backgroundColor:
              parseInt(currentCardData[props.currentCategory][props.index].size) === 26
                ? 'lightblue'
                : '',
            }}>26см</button>
            <button onClick={() => handleSizeChange(30, props.index)}
            style={{
              backgroundColor:
              parseInt(currentCardData[props.currentCategory][props.index].size) === 30
                ? 'lightblue'
                : '',
            }}>30см</button>
            <button onClick={() => handleSizeChange(38, props.index)}
            style={{
              backgroundColor:
              parseInt(currentCardData[props.currentCategory][props.index].size) === 38
                ? 'lightblue'
                : '',
            }}>38см</button>
          </div>
        </div>
      )}
      <p>Price: {currentCardData[props.currentCategory][props.index].price}</p>
    </li>
  );
};
