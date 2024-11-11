import { Link } from 'react-router-dom'
import'./Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero_content_container">
            <h1> Best Cleaning Service </h1>
            <h1>In The World </h1>
            <p>Our best-in-class WordPress solution, with additional optimization to make running aWooCommerce online storer.</p>
            <Link to='/contactus' className='contact-btn'>Contact US <span> &gt;</span></Link>
        </div>
    </div>
  )
}

export default Hero