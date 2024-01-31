  import { Link } from 'react-router-dom'

  export const Cart = ({ currentCart }) => {
    let totalCost = 0; // Начальное значение общей стоимости

  // Проверка наличия массива и его длины
  if (Array.isArray(currentCart) && currentCart.length > 0) {
    totalCost = currentCart.reduce((total, currentItem) => {
      return total + currentItem.price;
    }, 0);
  }


    return (
      <Link to='/cart' style={{
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        background: '#fe5f1e',
        color: 'white',
        fontSize: '15px',
        borderRadius: '10px',
        padding: '10px',
      }}>
        <p style={{
          borderRight: '1px solid white',
          margin: '0 5px',
          padding: '0 5px'
        }}>{totalCost} руб</p>
        <img src="/shopping-cart.svg" alt="cart"/>
        <p>{Array.isArray(currentCart) && currentCart.length > 0 ? currentCart.length : 0}</p>
      </Link>
    )
  }
