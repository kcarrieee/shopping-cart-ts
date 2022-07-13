import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'


const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
      <nav className="navbar">
      <div className="navbar__logo"> <Link to={'/'}>DokCart</Link> </div>
      <ul className="navbar__links">
        <li><Link to={'/'} >Market</Link> </li>
        <li><Link to={'/about'}>About</Link> </li>
        <li><Link to={'/contact'}>Connect</Link> </li>
        <li><Link to={'/'}>022</Link> </li>
      </ul>
      <div className="navbar__cart" onClick={openCart}>
        Cart(<span className="navbar__cart__number">{cartQuantity}</span>)
      </div>
    </nav>
    {/* <ShoppingCart/> */}
    </>
  )
}

export default Navbar