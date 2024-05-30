import React from 'react'
import "./FooterSection.scss"
import Rectangle from "../../assets/images/Rectangle-bg.png"
import vectorArrowDown from "../../assets/icons/VectorArrowDown.png"
import Icon1 from "../../assets/icons/Icon1.png"
import Zwilt from "../../assets/images/zwilt.png"

const FooterSection = () => {
    return (
        <footer className="footer">

            <div className="contact-us">
                <img src={Rectangle} alt=""/>
                <div className="btn-text">
                    <h1>Need a job done, and done well? Get started</h1>
                    <button className="btnArrowDown">
                        <img src={vectorArrowDown} alt=""/>
                    </button>
                </div>
            </div>

            <div className="footerInfo">
                <div className="footer-left">
                    <div className="icons-container">
                        <img src={Zwilt} alt=""/>
                        <img src={Icon1} alt=""/>
                    </div>

                    <p className="text1">We take complex hiring processes - and simplify them. Connecting you to
                        the world’s highly
                        qualified talent pool.
                    </p>

                    <p className="text2">LINKS AND REDIRECTS</p>

                    <div className="btn-container">
                        <button>Hire now</button>
                        <button>Apply now</button>
                    </div>
                </div>


                <div className="footer-right">
                    <h1>Connecting the right people to the right businesses.</h1>

                    <div className="grid-footer">
                        <div className="footer-grid-content">PLATFORM</div>
                        <div className="footer-grid-content">CATEGORIES</div>
                        <div className="footer-grid-content">HELP</div>
                        <div className="footer-grid-content">GET IN TOUCH @</div>

                        <div className="footer-grid-content2">Find Work</div>
                        <div className="footer-grid-content2">Data Science</div>
                        <div className="footer-grid-content2">FAQ's</div>
                        <div className="footer-grid-content2">Instagram</div>


                        <div className="footer-grid-content2">Find Talent</div>
                        <div className="footer-grid-content2">IT & Networking </div>
                        <div className="footer-grid-content2">Contact Us </div>
                        <div className="footer-grid-content2">LinkedIn</div>

                        <div className="footer-grid-content2">Categories</div>
                        <div className="footer-grid-content2">Web & Mobile</div>
                        <div className="footer-grid-content2">{" "}</div>
                        <div className="footer-grid-content2">Twitter</div>

                        <div className="footer-grid-content2">About Us</div>
                    </div>
                </div>
            </div>

            <hr className="horizontal-line"/>

            <div className="footer-last">
                <div className="allright">All right reserved</div>

                <div className="ankle-tags">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Condition</a>
                </div>
            </div>
        </footer>
    )
}
export default FooterSection
