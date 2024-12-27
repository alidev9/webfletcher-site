import heroImage1 from './assets/images/hero-image-1.png'
import heroImage2 from './assets/images/hero-image-2.png'
import targetGraphic from './assets/images/target-graphic.png'

import cloudImage1 from './assets/images/cloud-1.svg'
import cloudImage2 from './assets/images/cloud-2.svg'
import cloudImage3 from './assets/images/cloud-3.svg'

import computerStarIcon from './assets/icons/computer-star-icon.svg'
import databaseServerIcon from './assets/icons/database-server-1.svg'
import personShareIcon from './assets/icons/person-share-signal-transmit.svg'

import customerProfileImage from './assets/images/customer-profile-image.png'
import './styles/homepage.css'
function Homepage(){
    function viewTestimonial(e){
        const testimonialPosition = e.target.dataset.position;
        const targetTestimonial = document.querySelector(`:nth-child(${testimonialPosition} of .testimonial)`);
        targetTestimonial.scrollIntoView({block: 'nearest', inline: 'start', behavior: 'smooth'});
    }
    function selectCarouselCircle(e){
        const testimonialArray = document.querySelectorAll('.testimonial');
        const visibleTestimonialBox = Array.from(testimonialArray).find((testimonialBox) => {
            const rect = testimonialBox.getBoundingClientRect();
            return (
                rect.left >= 0 &&
                rect.right <= document.documentElement.clientWidth
            )
        })
        if(!visibleTestimonialBox){
            return;
        }
        const circleIndex = visibleTestimonialBox.dataset.position;
        const circleElement = document.querySelector(`.carousel-circle[data-position="${circleIndex}"]`)
        //clear previously selected circle
        if(document.querySelector('.carousel-circle.selected')){
            const previouslySelectedCircle = document.querySelector('.carousel-circle.selected'); 
            previouslySelectedCircle.classList.remove('selected');
            previouslySelectedCircle.classList.add('not-selected');
        }
        circleElement.classList.add('selected');
    }
    return (
        <main>
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
                <div className="intro-container">
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
            <div className="testimonials-section-container">
                <img className="testimonial-section-cloud-3" src={cloudImage3} alt="" />
                <div className="intro-container">
                    <div className="subheader">Testimonials</div>
                    <h2>What Our Clients Say</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque. Aenean leo risus, imperdiet vitae dapibus vel, ornare sed arcu. Donec eleifend risus in metus pellentesque, sed auctor neque ornare. Etiam auctor nulla nec elementum ornare.</p>
                </div>
                <div className="testimonial-carousel-container" onScroll={selectCarouselCircle}>
                    <div className="testimonial" onScroll={selectCarouselCircle} data-position="1">
                        <img src={customerProfileImage} alt="" className="customer-picture" />
                        <div className="customer-info-wrapper">
                            <h3 className="customer-name">Patrick Bateman</h3>
                            <div className="customer-position">CEO</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                    <div className="testimonial" onScroll={selectCarouselCircle} data-position="2">
                        <img src={customerProfileImage} alt="" className="customer-picture" />
                        <div className="customer-info-wrapper">
                            <h3 className="customer-name">Patrick Bateman</h3>
                            <div className="customer-position">CEO</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                    <div className="testimonial" onScroll={selectCarouselCircle} data-position="3">
                        <img src={customerProfileImage} alt="" className="customer-picture" />
                        <div className="customer-info-wrapper">
                            <h3 className="customer-name">Patrick Bateman</h3>
                            <div className="customer-position">CEO</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                    <div className="testimonial" onScroll={selectCarouselCircle} data-position="4">
                        <img src={customerProfileImage} alt="" className="customer-picture" />
                        <div className="customer-info-wrapper">
                            <h3 className="customer-name">Patrick Bateman</h3>
                            <div className="customer-position">CEO</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque.</p>
                    </div>
                </div>
                <div className="carousel-circle-wrapper">
                    <div className="carousel-circle not-selected" data-position="1" onClick={viewTestimonial}></div>
                    <div className="carousel-circle not-selected" data-position="2" onClick={viewTestimonial}></div>
                    <div className="carousel-circle not-selected" data-position="3" onClick={viewTestimonial}></div>
                    <div className="carousel-circle not-selected" data-position="4" onClick={viewTestimonial}></div>
                </div>
            </div>
            <div className="closing-section-container">
                <div className="closing-image-wrapper">
                    <div className="closing-image"></div>
                    <div className="closing-image"></div>
                    <div className="closing-image"></div>
                </div>
                <h2>Design your <span>unique</span> web presence right away</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat metus eget dolor faucibus, vel maximus nulla scelerisque. Aenean leo risus, imperdiet vitae dapibus vel, ornare sed arcu. </p>
                <button className="cta-button">Get Started!</button>
                <div>Any inquiries? <a href="#">Contact sales</a>
                <img src={cloudImage3} alt="" className="closing-section-cloud-3" />
                </div>
            </div>
        </main>
    )
}

export default Homepage