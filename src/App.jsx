import Homepage from "./Homepage"
//import WebsiteForm from "./WebsiteForm"
import companyLogo from './assets/images/company-logo.svg'
import menuToggle from './assets/images/hamburger-menu-toggle.png'
import {Link, Routes, Route} from 'react-router'
import './styles/base.css'

function App() {
  return (
    <>
      <header>
          <nav>
                <div className="navbar-inner-wrapper">
                    <div className="homepage-link">
                        <Link to='/'>
                          <img src={companyLogo} alt="Webfletcher Logo" />
                          <span>WebFletcher</span>
                        </Link>
                    </div>
                    <ul className="navbar-links-container">
                      <li>About</li>
                      <li>Services</li>
                      <li>Portfolio</li>
                      <li>Support</li>
                    </ul>
                    <div className="account-button-container">
                      <button>Sign In</button>
                      <button>Register</button>
                    </div>
                    <img src={menuToggle} alt="Menu Toggle" />
                </div>
          </nav>
      </header>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
      <footer>
        <div className="company-logo-description-wrapper">
          <div className="company-logo">
            <img src={companyLogo} alt="" />
            <span>WebFletcher</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque</p>
        </div>
        <div className="links-wrapper">
          <div className="resources-links-wrapper footer-wrapper">
            <h2>Resources</h2>
            <div>FAQ</div>
            <div>Support</div>
            <div>Careers</div>
          </div>
          <div className="legal-links-wrapper footer-wrapper">
            <h2>Legal</h2>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
          <div className="contact-info-wrapper footer-wrapper">
            <h2>Contact Us</h2>
            <div className="email">example@hotmail.com</div>
            <div className="phone-number">+123456789</div>
          </div>
        </div>
        <div className="copyright-text">Copyright © 2024 WebFletcher. All rights reserved</div>
      </footer>
    </>
  );
}

export default App;