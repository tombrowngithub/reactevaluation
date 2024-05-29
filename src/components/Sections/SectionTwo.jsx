import React from 'react'
import "./SectionTwo.scss"
import dotNetImg from "../../assets/logos/dontNet.png"
import shopifyLogo from "../../assets/logos/shopify.png"
import magnetor from "../../assets/logos/magneto.png"
import webFlow from "../../assets/logos/webflow.png"
import dataScience from "../../assets/logos/datascience.png"
import icon2 from "../../assets/icons/Icon2.png"
import icon4 from "../../assets/icons/Icon4.png"


import Vector1 from "../../assets/icons/Vector1.png"
import Vector2 from "../../assets/icons/Vector2.png"
import Vector3 from "../../assets/icons/Vector3.png"

import BackArrow from "../../assets/icons/Icon3.png"
import Cinama from "../../assets/logos/cinama.png"
import Unreal from "../../assets/logos/unreal.png"
import Figma from "../../assets/logos/figma.png"
import Graphic from "../../assets/logos/graphic-desing.png"
import Illustrator from "../../assets/logos/illutrator.png"

const SectionTwo = () => {
    return (
        <section className="section-two">
            <div className="header-container">
                <h1>Your one-stop marketplace for finding the talent your business needs.</h1>
            </div>

            <div className="section-two-content-container">
                <div className="section-two-content">
                    <div className="content-left">
                        <h2>Find Dev and IT professionals to scale your business.</h2>

                        <div className="grid-container">
                            <div><img src={Vector1} alt=""/> <p>989 Skills</p></div>
                            <div><img src={Vector2} alt=""/> <p>45 Sub-Categories</p></div>
                            <div><img src={Vector3} alt=""/> <p>1011 Profiles</p></div>
                        </div>

                    </div>
                    <div className="content-right">
                        <p>IT & Development</p>

                        <div className="logo-container">
                            <div className="logos">
                                <img src={shopifyLogo} alt=""/>
                                <p>Shopify Developer</p>
                            </div>

                            <div className="logos">
                                <img src={magnetor} alt=""/>
                                <p>Magento Developer</p>
                            </div>

                            <div className="logos">
                                <img src={dataScience} alt=""/>
                                <p>Data Scientist</p>
                            </div>

                            <div className="logos">
                                <img src={webFlow} alt=""/>
                                <p>Webflow Developer</p>
                            </div>

                            <div className="logos">
                                <img src={dotNetImg} alt=""/>
                                <p>Dot Net Developer</p>
                            </div>

                            <div className="logos-arrow">
                                <img src={icon2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-two-content2">
                    <div className="content-left">
                        <h2>Explore Creative individuals with a keen eye for detail.</h2>

                        <div className="grid-container">
                            <div><img src={Vector1} alt=""/> <p>989 Skills</p></div>
                            <div><img src={Vector2} alt=""/> <p>45 Sub-Categories</p></div>
                            <div><img src={Vector3} alt=""/> <p>1011 Profiles</p></div>
                        </div>
                    </div>
                    <div className="content-right">
                        <p>IT & Development</p>

                        <div className="logo-container">
                            <div className="logos-arrow">
                                <img src={BackArrow} alt=""/>
                            </div>

                            <div className="logos">
                                <img src={Figma} alt=""/>
                                <p>UX Designer</p>
                            </div>

                            <div className="logos">
                                <img src={Graphic} alt=""/>
                                <p>Graphics Designer</p>
                            </div>

                            <div className="logos">
                                <img src={Illustrator} alt=""/>
                                <p>Illustration Artist</p>
                            </div>

                            <div className="logos">
                                <img src={Unreal} alt=""/>
                                <p>Unreal Engine</p>
                            </div>

                            <div className="logos">
                                <img src={Cinama} alt=""/>
                                <p>Cinama 4D</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="additional-content">
                <div className="left">
                    <button><img src={icon4} alt="icon" /></button>
                    <span>Explore More</span>
                </div>

                <div className="right">
                    <h4>30 More <span>to explore</span></h4>
                </div>
            </div>
        </section>
    )
}
export default SectionTwo
