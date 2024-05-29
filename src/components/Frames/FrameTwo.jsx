import React from 'react'
import "./FrameTwo.scss"
import icon4 from "../../assets/icons/Icon4.png";
import Frame2img from "../../assets/images/Frame2img.png"
import Frame2img3 from "../../assets/images/Frame2img3.png"
import Frame2img5 from "../../assets/images/Frame2img5.png"

const FrameTwo = () => {
    return (
        <div className="frame-two">
            <div className="left">
                <h1>An open book.</h1>
                <ul className="list-contents">
                    <li>
                        <div></div>
                        Easy and transparent one-to-one chat with candidates.
                    </li>
                    <li>
                        <div></div>
                        Simple and convenient payment methods.
                    </li>
                    <li>
                        <div></div>
                        Review past ratings.
                    </li>
                </ul>
                <div className="btn-card">
                    <button><img src={icon4} alt=""/></button>
                    <span>Learn More</span>
                </div>
            </div>

            <div className="right">
                <img className="main-img" src={Frame2img3} alt=""/>
                <img className="man-head-img" src={Frame2img} alt=""/>
                <img className="man-head-img2" src={Frame2img5} alt=""/>

            </div>
        </div>
    )
}
export default FrameTwo
