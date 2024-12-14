
import companyLogo from './assets/images/company-logo.png'
import menuToggle from './assets/images/hamburger-menu-toggle.png'
import heroImage1 from './assets/images/hero-image-1.png'
import heroImage2 from './assets/images/hero-image-2.png'
import targetGraphic from './assets/images/target-graphic.png'

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
                    <h1>Your Vision, <span>Perfectly</span> Tailored</h1>
                    <p>From custom designs to seamless functionality, we bring your vision to life. Let's build something extraordinary together.</p>
                    <button className="cta-button">Explore Services</button>
                </div>
                <div className="hero-section-info">
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
        </>
    )
}

export default Homepage