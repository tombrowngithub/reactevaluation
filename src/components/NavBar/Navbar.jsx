import React, {useState} from 'react'
import './Navbar.scss'
import zwilt from "../../assets/images/zwilt.png"
import icon1 from "../../assets/icons/Icon1.png"
import menuIcon from "../../assets/icons/menuIcon2.png"

const Navbar = () => {
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className="navbar">
            <div className={showSideBar ? "sidebar visible" : "sidebar"}>

                <div className="navLinks">
                    <a href="#">Find Work</a>
                    <a href="#">Find Talent</a>
                    <a href="#">Articles</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
                <hr/>

                <div className="navLoginLink">
                    <a className="login" href="#">Login</a>
                    <a className="join" href="#">Join Now</a>
                </div>
            </div>


            <div className="navLogo">
                <img src={zwilt} alt="zwilt-image"/>
                <img src={icon1} alt="icon-1"/>
            </div>


            <div className="navLinks">
                <a href="#">Find Work</a>
                <a href="#">Find Talent</a>
                <a href="#">Articles</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="navLoginLink">
                <a href="#">Login</a>
                <a className="join" href="#">Join Now</a>
            </div>
            <div className="menuIcon" onClick={() => setShowSideBar(!showSideBar)}><img src={menuIcon} alt=""/></div>
        </div>
    )
}
export default Navbar
