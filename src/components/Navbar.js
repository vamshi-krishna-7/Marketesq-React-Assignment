import {Link} from 'react-router-dom'
import '../styles.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Brisphere</h1>
      <ul>
        <li>
          <Link to="/">Discover</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/booking">Book Now</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
