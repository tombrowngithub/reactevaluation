import React from 'react'
import "./FrameThree.scss"
import icon4 from "../../assets/icons/Icon4.png";
import Frame3img from "../../assets/images/Frame3img.png";
import Frame3im2 from "../../assets/images/Frame3img2.png";
import Frame3img3 from "../../assets/images/Frame3img3.png";
import Frame2img5 from "../../assets/images/Frame2img5.png"
import Frame2img4 from "../../assets/images/Frame2img4.png"

const FrameThree = () => {
    return (
        <div className="frame-three">
        <div className="left">
            <h1>Stay in the loop.</h1>
            <ul className="list-contents">
                <li>
                    <div></div>
                    Track your staff activity down to every minute with screenshots.
                </li>
                <li>
                    <div></div>
                    Comprehensive timesheet data to process payments.
                </li>
                <li>
                    <div></div>
                    Create projects to organize and assign tasks more effectively.
                </li>
            </ul>
            <div className="btn-card">
                <button><img src={icon4} alt=""/></button>
                <span>Learn More</span>
            </div>
        </div>

        <div className="right">
            <img className="main-img" src={Frame3img} alt=""/>
            <img className="boy-head-img" src={Frame2img5} alt=""/>
            <img className="man-head-img" src={Frame3img3} alt=""/>
            <img className="man-head-img3" src={Frame3im2} alt=""/>
            <img className="woman-head-img" src={Frame2img4} alt=""/>

        </div>
    </div>
    )
}
export default FrameThree
