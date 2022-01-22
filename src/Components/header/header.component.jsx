import './header.styles.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/cryptora-r.png'
export const Header = () => {

  return (
    <header>
    <div className="container">
      <nav className="navbar">

        {/* Application navigation options */}
        <ul className="nav-list">
          <li><Link className="options" to="/">Dashboard</Link></li>
          <div className="Applogo">
            {/* App logo */}
              <img src={logo} className="AppLogo" alt="logo" />
    
          </div>
          <li><Link className="options" to="/news">Articles</Link></li>
        </ul>
      </nav>
    </div>
    </header>
  )
}
