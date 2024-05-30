import React from 'react'
import "./SectionFive.scss"
import img_1 from "../../assets/images/1.png"
import img_2 from "../../assets/images/2.png"
import img_3 from "../../assets/images/3.png"
import Man1 from "../../assets/images/man1.png"
import Man2 from "../../assets/images/man2.png"
import Man3 from "../../assets/images/man3.png"
import Man4 from "../../assets/images/man4.png"
import vectorLine1 from "../../assets/images/Vector-line.png"
import vectorLine2 from "../../assets/images/Vector-line2.png"
import vectorLine3 from "../../assets/images/Vector-line3.png"
import vectorLine4 from "../../assets/images/Vector-line4.png"
import vectorLine6 from "../../assets/images/Vector-line6.png"
import vectorLine7 from "../../assets/images/Vector-line7.png"
import vectorLine8 from "../../assets/images/Vector-line8.png"
import vectorLine9 from "../../assets/images/Vector-line9.png"
import GoodMark from "../../assets/images/good-mark.png"
import woman_circle from "../../assets/images/woman-circle.png"
import woman_circle2 from "../../assets/images/woman_circle.png"
import Leelar from "../../assets/images/Leelar.png"
import Leelar2 from "../../assets/images/Leelar2.png"
import Man_Circle from "../../assets/images/man-circle.png"
import Gridspan from "../../assets/images/gridspan.png"
import Man_Circle2 from "../../assets/images/man_cirecle2.png"
import Standing_man from "../../assets/images/standing-man.png"
import icon4 from "../../assets/icons/Icon4.png";

const SectionFive = () => {
    return (
        <section className="sectionFive">
            <h1 className="Heading">Start your journey today.</h1>

            <div className="contents">
                <div className="one">
                    <div className="left">
                        <div className="card-one">
                            <img src={img_1} alt=""/>
                            <div className="card-container">
                                <h1 className="card-header">Find your next star performer.</h1>
                                <p>Explore the vast Zwilt marketplace to find the candidate
                                    that meets your needs.
                                </p>
                            </div>
                        </div>

                        <div className="btn-card">
                            <button><img src={icon4} alt=""/></button>
                            <span>Join Now</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="grid-card">
                            <div className="img-container1">
                                <img src={Man1} alt=""/>
                            </div>
                            <div className="detail">
                                <h2>Ruby Developer</h2>
                                <p>Redwood City California 7 years experience</p>
                            </div>
                        </div>
                        <div className="grid-card2">
                            <div className="img-container2">
                                <img src={Man2} alt=""/>
                            </div>
                            <div className="detail">
                                <h2>System ops engineer</h2>
                                <p>Abu Dhabi UAE 5 years experience</p>
                            </div>
                        </div>
                        <div className="grid-card">
                            <div className="img-container3">
                                <img src={Man3} alt=""/>
                            </div>
                        </div>
                        <div className="grid-card4">
                            <div className="img-container4">
                                <img src={Man4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contents2">
                <div className="separator-content2-top"></div>
                <div className="two">
                    <div className="left">
                        <div className="card-one">
                            <img src={img_2} alt=""/>
                            <div className="card-container">
                                <h1 className="card-header">Evaluate to your heart’s content.</h1>
                                <p>Assess the candidate through work history, transparent tests and video
                                    interviews.
                                </p>
                            </div>
                        </div>

                        <div className="btn-card">
                            <button><img src={icon4} alt=""/></button>
                            <span>Brown More</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="grid-card-two">
                            <div className="imgCon1">
                                <img src={Man_Circle} alt=""/>

                                <div className="detail">
                                    <img src={vectorLine1} alt=""/>
                                    <img src={vectorLine2} alt=""/>
                                </div>
                            </div>


                            <div className="vector-line-container">
                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>

                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>

                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>
                            </div>
                        </div>


                        <div className="grid-card-three">
                            <div className="imgCon1">
                                <img src={woman_circle} alt=""/>

                                <div className="detail">
                                    <img src={vectorLine6} alt=""/>
                                    <img src={vectorLine7} alt=""/>
                                </div>
                            </div>


                            <div className="vector-line-container">
                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>

                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>

                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>
                            </div>
                        </div>


                        <div className="grid-card-mark">
                            <div className="imgCon1">
                                <img src={GoodMark} alt=""/>
                            </div>

                        </div>


                        <div className="grid-card-four">
                            <div className="imgCon1">
                                <img src={Man_Circle2} alt=""/>

                                <div className="detail">
                                    <img src={vectorLine8} alt=""/>
                                    <img src={vectorLine9} alt=""/>
                                </div>
                            </div>


                            <div className="vector-line-container">
                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>

                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>

                                <div className="vector-line">
                                    <img src={vectorLine3} alt=""/>
                                    <img src={vectorLine4} alt=""/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="separator-content2-bottom"></div>
            </div>


            <div className="contents3">
                <div className="separator-content3-top"></div>
                <div className="one">
                    <div className="left">
                        <div className="card-one">
                            <img src={img_3} alt=""/>
                            <div className="card-container">
                                <h1 className="card-header">Start building your team.</h1>
                                <p>Onboard your candidate right away and start creating the next big thing.</p>
                            </div>
                        </div>

                        <div className="btn-card">
                            <button><img src={icon4} alt=""/></button>
                            <span>Join Now</span>
                        </div>
                    </div>

                    <div className="right">
                        <div className="grid-card-last">
                            <div className="img-container1">
                                <img src={woman_circle2} alt=""/>
                                <h2>Allison Parker</h2>
                            </div>
                            <div className="detail">
                                <h2>Ruby Developer</h2>
                                <p>Redwood City California 7 years experience</p>
                                <img src={Leelar} alt=""/>
                            </div>
                        </div>
                        <div className="grid-card2-last">
                            <div className="img-container2">
                                <img className="img-bg" src={Standing_man} alt=""/>
                                <img className="img-leerlar" src={Leelar2} alt=""/>
                            </div>

                        </div>
                        <div className="grid-card-span">
                            <div className="img-container3">
                                <img src={Gridspan} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionFive
