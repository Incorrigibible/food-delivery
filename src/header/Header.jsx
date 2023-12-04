import { Logo } from '../assets/ui/logo/Logo'
import { Cart } from '../assets/ui/cart/Cart'

export const Header = () =>{
  return (
    <>
      <div style={{
        display: 'Flex',
        justifyContent: 'space-between',
      }}>
        <Logo/>
        <Cart/>
      </div>
    </>
  )
}
