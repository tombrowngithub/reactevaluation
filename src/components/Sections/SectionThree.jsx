import React from 'react'
import "./SectionThree.scss"
import zwiltGif from "../../assets/images/zwilt-gif.gif"
import Groove from "../../assets/logos/groove.png"
import VectorArrow1 from "../../assets/icons/VectorBtn1.png"
import VectorArrow2 from "../../assets/icons/VectorBtn2.png"
import GrooveSmall from "../../assets/logos/grooveSmall.png"

const SectionThree = () => {
    return (
        <section className="section-three">
            <div className="left">
                <h1>How it worked for Jason <img src={zwiltGif} alt=""/> at <img src={Groove} alt=""/></h1>

                <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</p>

                <div className="btnContainer">
                    <button className="btnArrow"><img src={VectorArrow2} alt=""/></button>
                    <button className="btnArrow"><img src={VectorArrow1} alt=""/></button>
                </div>
            </div>

            <div className="right">
                <div className="right-content">
                    <div className="header-right">
                        <img src={GrooveSmall} alt=""/>
                    </div>
                    <div className="subHeader-right">
                        <h2>Jason Makki</h2>
                        <p>Engineer at GROOVE.</p>
                        <p>San Francisco</p>
                    </div>
                </div>

                <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt
                    enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled
                    us to deliver on time and they’ve been heavy hitters.</p>
            </div>
        </section>
    )
}
export default SectionThree
