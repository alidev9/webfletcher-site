
import companyLogo from './assets/images/company-logo.png'
import menuToggle from './assets/images/hamburger-menu-toggle.png'
import heroImage1 from './assets/images/hero-image-1.png'
import heroImage2 from './assets/images/hero-image-2.png'
import targetGraphic from './assets/images/target-graphic.png'

import cloudImage1 from './assets/images/cloud-1.svg'
import cloudImage2 from './assets/images/cloud-2.svg'
import cloudImage3 from './assets/images/cloud-3.svg'

import computerStarIcon from './assets/icons/computer-star-icon.svg'
import databaseServerIcon from './assets/icons/database-server-1.svg'
import personShareIcon from './assets/icons/person-share-signal-transmit.svg'
function Homepage(){
    return (
        <>
            <nav>
                <ul>
                    <li className="homepage-link">
                        <a href="#">
                            <img src={companyLogo} alt="Webfletcher Logo" />
                            <span>WebFletcher</span>
                        </a>
                    </li>
                    <li>
                        <img src={menuToggle} alt="Menu Toggle" />
                    </li>
                </ul>
            </nav>
            <div className="hero-section-container">
                <div className="hero-section-cta">
                    <h1>Your Vision,<br/> <span>Perfectly</span> Tailored</h1>
                    <p>From custom designs to seamless functionality, we bring your vision to life. Let's build something extraordinary together.</p>
                    <button className="cta-button">Explore Services</button>
                </div>
                <div className="hero-section-info">
                    <img className="hero-section-cloud-3" src={cloudImage3} alt=""/>
                    <img className="hero-section-cloud-1" src={cloudImage1} alt=""/>
                    <img className="hero-section-cloud-2" src={cloudImage2} alt=""/>
                    <div className="hero-text-container">
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        Where design meets functionality
                    </div>
                    <div className="hero-text-container">
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        Host with ease!
                    </div>
                    <div className="hero-image-container">
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <img src={heroImage1} alt="" />
                    </div>
                    <div className="hero-image-container">
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <img src={heroImage2} alt="" />
                    </div>
                    <div className="hero-text-container">
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        <div className="border-corner"></div>
                        Be seen with <span> SEO</span>
                    </div>
                    <img className="target-graphic" src={targetGraphic} alt="" />
                </div>
            </div>
            <div className="services-section-container">
                <div className="services-section-cta">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque. Aenean leo risus, imperdiet vitae dapibus vel, ornare sed arcu. Donec eleifend risus in metus pellentesque, sed auctor neque ornare. Etiam auctor nulla nec elementum ornare.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="services-section-info">
                    <div className="service-container">
                        <img src={computerStarIcon} alt="" />
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                    <div className="service-container">
                        <img src={personShareIcon} alt="" />
                        <h3>Brand Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                    <div className="service-container">
                        <img src={databaseServerIcon} alt="" />
                        <h3>Reliable Hosting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                </div>
                <div className="services-section-images">
                    {/*Placeholder divs for future images*/}
                    <img className="services-section-cloud-1" src={cloudImage1} alt="" />
                    <img className="services-section-cloud-2" src={cloudImage2} alt="" />
                    <div className="services-image-wrapper">
                        <div className="services-image"></div>
                        <div className="services-image"></div>
                    </div>
                </div>
            </div>
            <div className="features-section-container">
                <div className="features-intro-container">
                    <div className="subheader">Invest</div>
                    <h2>Why choose us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque. Aenean leo risus, imperdiet vitae dapibus vel, ornare sed arcu. Donec eleifend risus in metus pellentesque, sed auctor neque ornare. Etiam auctor nulla nec elementum ornare.</p>
                </div>
                <div className="feature-container">
                    <div className="feature-image"></div>
                    <h3>Competitve prices</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque. </p>
                    <div className="feature-number">01.</div>
                </div>
                <div className="feature-container">
                    <div className="feature-image"></div>
                    <h3>Professionalism</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque. </p>
                    <div className="feature-number">02.</div>
                </div>
                <div className="feature-container">
                    <div className="feature-image"></div>
                    <h3>Long-term partnership</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    <div className="feature-number">03.</div>
                </div>
            </div>
        </>
    )
}

export default Homepage