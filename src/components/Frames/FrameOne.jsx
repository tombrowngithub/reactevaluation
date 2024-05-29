import React from 'react'
import "./FrameOne.scss"
import FrameOneImg from "../../assets/images/frame-one.png"
import icon4 from "../../assets/icons/Icon4.png";

const FrameOne = () => {
    return (
        <div className="frame-one">
            <div className="left">
                <h1>Onboard without the risk.</h1>
                <ul className="list-contents">
                    <li>
                        <div></div>
                        We pick the best for you to select.
                    </li>
                    <li>
                        <div></div>
                        Thousands of vetted candidates in dozens of categories.
                    </li>
                    <li>
                        <div></div>
                        Risk-free resource swapping for the best fit.
                    </li>
                </ul>
                <div className="btn-card">
                    <button><img src={icon4} alt=""/></button>
                    <span>Learn More</span>
                </div>
            </div>


            <div className="right">
                <img src={FrameOneImg} alt=""/>
            </div>
        </div>
    )
}

export default FrameOne;

