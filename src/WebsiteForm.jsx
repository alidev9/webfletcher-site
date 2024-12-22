import {useState} from 'react'
import './styles/website-form.css'
import companyLogo from './assets/images/company-logo.png'
function WebsiteForm(){
    const [webpageCount, setWebpageCount] = useState(1)
    function addWebpage(){
        setWebpageCount(x => x + 1);
    }
    return (
        <>
        <nav>
            <a href="https://www.google.com"><button>&larr; Back to the website</button></a>
            <div className="company-name">
                <img src={companyLogo} alt=""/>
                <span>WebFletcher</span>
            </div>
        </nav>
            <div className="subform-container subform-1">
                <h2><span>Step 1: </span>Your details</h2>
                <div className="subform-fields-container">
                    <div className="personal-details-wrapper">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="John Smith"/>
                        <label htmlFor="user-email">Email</label>
                        <input type="email" id="user-email" name="userEmail" placeholder="example@hotmail.com"/>
                        <label htmlFor="phone-number">Number</label>
                        <input type="tel" id="phone-number" name="phoneNumber" placeholder="+123 45 678 901"/>
                    </div>
                    <label htmlFor="interest-text">What is your business or interest about?</label>
                    <textarea name="interestText" id="interest-text" placeholder="My business is about..."></textarea>
                    <label htmlFor="reference-links">Please provide any social media links or previoius sites:</label>
                    <textarea name="referenceLinks" id="reference-links" placeholder="My business is about..."></textarea>
                </div>
            </div>
            <div className="subform-container subform-2">
                <h2><span>Step 2: <br /></span>Tell us about your <span>dream</span> website!</h2>
                <div className="subform-fields-container">
                    <label htmlFor="website-type">What type of website do you require?</label>
                    <select name="websiteType" id="website-type">
                        <option value="billboard">Billboard site</option>
                        <option value="brochure">Brochure site</option>
                        <option value="branded">Branded site</option>
                        <option value="custom">Custom site</option>
                    </select>
                    <fieldset>
                        <legend>Tell us about each webpage and text you would like to include:</legend>
                        <div className="webpage-noinfo-wrapper">
                            <input type="checkbox" id="webpage-noinfo" name="webpageNoInfo"/>
                            <label htmlFor="webpage-noinfo">I don't know</label>
                        </div>
                        {Array.from({ length: webpageCount}).map((_, index) => {
                            const currentPage = index + 1;
                            return (
                                <>
                                    <label htmlFor={`webpage-${currentPage}`} className="webpage-info-label">
                                        {`Webpage ${currentPage}:`}
                                    </label>
                                    <textarea name={`webpage${currentPage}`} id={`webpage-${currentPage}`} className="webpage-info-textarea" placeholder={`Webpage ${currentPage} will be about...`}></textarea>
                                </>
                            )
                        })}
                        <button type="button" className="webpage-info-button" onClick={addWebpage}>+ Add Webpage</button>
                    </fieldset>
                </div>
            </div>
        </>
    )
}

export default WebsiteForm