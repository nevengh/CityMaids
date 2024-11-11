import './Header.css'
import logo from '../../assets/images/dreamit-logo-tr.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header'>
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="nav-menu">
            <div className="nav-links">
                <Link to='/'>Home</Link>
            </div>
            <div className="nav-links">
                <Link to='/aboutus'>About Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Header