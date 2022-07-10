import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="navbar__logo"> <Link to={'/'}>DokCart</Link> </div>
      <ul className="navbar__links">
        <li><Link to={'/'} >Market</Link> </li>
        <li><Link to={'/about'}>About</Link> </li>
        <li><Link to={'/contact'}>Connect</Link> </li>
        <li><Link to={'/'}>022</Link> </li>
      </ul>
      <div className="navbar__cart">
        Cart(<span className="navbar__cart__number">0</span>)
      </div>
    </nav>
  )
}

export default Navbar