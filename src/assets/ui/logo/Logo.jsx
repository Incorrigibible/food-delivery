
import { Link } from 'react-router-dom'

export const Logo = () =>{
  return (
  
      <Link to="/" style={{
        display: 'flex',
        alignItems: 'center',
        lineHeight: '5px'
      }}>
      <img src='/logo.png' style={{
        maxWidth: '40px',
        maxHeight: '40px',
      }}/>
      <div>
        <p>Happy Pizza</p>
        <p>Лучшие ингридиенты, лучшая пицца</p>
      </div>
      </Link>
    
  )
}
