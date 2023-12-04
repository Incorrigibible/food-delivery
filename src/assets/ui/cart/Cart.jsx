import { Link } from 'react-router-dom'

export const Cart = () =>{
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
      }}>0 руб</p>
      <img src="/shopping-cart.svg" alt="cart"/>
      <p>0</p>
    </Link>
  )
}
