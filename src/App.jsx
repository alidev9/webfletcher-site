import Homepage from "./Homepage"
//import WebsiteForm from "./WebsiteForm"
import companyLogo from './assets/images/company-logo.svg'
import menuToggle from './assets/images/hamburger-menu-toggle.png'
import closeMenuToggle from './assets/images/close-hamburger-menu.svg'
import {Link, Routes, Route} from 'react-router'
import { useState, useEffect } from 'react'
import './styles/base.css'

function App() {
  const [hamburgerMenuOn, setHamburgerMenuOn] = useState(false);
  function toggleHamburgerContainer(){
    //This helps in setting specific properties for when html, body and #root are parents to the hamburger menu
    document.querySelector('html').classList.toggle('hamburger-container-html');
    document.querySelector('body').classList.toggle('hamburger-container-body');
    document.querySelector('#root').classList.toggle('hamburger-container-root');
  }
  function showHamburgerMenu(e){
    toggleHamburgerContainer();
    setHamburgerMenuOn(true);
  }
  function closeHamburgerMenu(e){
    toggleHamburgerContainer();
    setHamburgerMenuOn(false);
  }
  /*TODO: Make the name of the current page bold in the hamburger menu*/
  useEffect(() => {
    const urlPath = window.location.pathname;
  }, [])
  if(!hamburgerMenuOn){
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
                        <img src={menuToggle} alt="Menu Toggle" onClick={showHamburgerMenu}/>
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
  } else {
    return (
      <>
        {/*using a div as this is not an actual header*/}
        <div className="hamburger-header">
          <Link to='/'>
            <img src={companyLogo} alt="Webfletcher Logo" />
            <span>WebFletcher</span>
            <img src={closeMenuToggle} alt="Close Hamburger Menu" onClick={closeHamburgerMenu} />
          </Link>
        </div>
        <ul className="hamburger-links-container">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Support</li>
        </ul>
        <button className="order-button">Order a Site</button>
      </>
    )
  }
}
export default App;