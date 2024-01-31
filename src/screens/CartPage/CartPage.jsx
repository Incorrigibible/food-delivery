
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../header/header';

export const CartPage = ({ currentCart }) => {
  const [cartItems, setCartItems] = useState(
    currentCart.map(item => ({ ...item, quantity: 1}))
  );

  const handleQuantityChange = (index, type) => {
    const updatedCart = cartItems.map((item, idx) => {
      if (idx === index) {
        const newQuantity = type === 'plus' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };
  
  

  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };
  
  const calculateTotalProducts = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item.price, item.quantity), 0);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 20px', height: '100vh' }}>
        {!cartItems.length ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ alignSelf: 'flex-start' }}>Корзина пустая</h2>
            <p>Вероятнее всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
            <img style={{ maxWidth: '300px' }} src="empty-cart.png" alt="Empty cart" />
            <Link to="/">
              <button>Вернуться назад</button>
            </Link>
          </div>
        ) : (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '850px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Корзина</h2>
                <button onClick={() => setCartItems([])}>Очистить корзину</button>
              </div>
              <ul>
                {cartItems.map((element, index) => (
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      borderTop: '1px solid #F4F4F4',
                      padding: '10px',
                      justifyContent: 'space-between',
                    }}
                    key={index}
                  >
                    <img style={{ maxWidth: '80px', maxHeight: '80px' }} src={element.imgPath} alt={element.name} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h3>{element.name}</h3>
                      <p>{element.description}</p>
                      <div style={{ display: 'flex' }}>
                      <button onClick={() => handleQuantityChange(index, 'minus')}>-</button>
                        <p>{element.quantity}</p>
                        <button onClick={() => handleQuantityChange(index, 'plus')}>+</button>
                      </div>
                    </div>
                    <div>{calculateItemTotal(element.price, element.quantity)}</div>
                    <button onClick={() => removeItemFromCart(element.id)}>Удалить</button>
                  </li>
                ))}
              </ul>
              <div>
                {cartItems.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p>Всего продуктов: {calculateTotalProducts()}</p>
                    <p>Сумма заказа: {totalPrice}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
