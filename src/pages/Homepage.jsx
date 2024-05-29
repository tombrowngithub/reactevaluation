import React from 'react'
import Navbar from "../components/NavBar/Navbar.jsx";
import "./Homepage.scss"
import SectionOne from "../components/Sections/SectionOne.jsx";
import SectionTwo from "../components/Sections/SectionTwo.jsx";
import SectionThree from "../components/Sections/SectionThree.jsx";
import Quote from "../assets/logos/quoteIcon.png"
import SectionFour from "../components/Sections/SectionFour.jsx";
import SectionFive from "../components/Sections/SectionFive.jsx";
import SectionSix from "../components/Sections/SectionSix.jsx";
import SectionSeven from "../components/Sections/SectionSeven.jsx";
import FooterSection from "../components/Sections/FooterSection.jsx";

const Homepage = () => {

    return (
        <main className="homepage">
            <Navbar/>
            <section className="homepage-content">
                <SectionOne/>
                <div className="separator-top"></div>
                <SectionTwo/>
                <div className="separator-bottom">
                    <img className="quote-icon" src={Quote} alt=""/>
                </div>
                <SectionThree/>
                <div className="separator-end"></div>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
                <SectionSeven/>
                <FooterSection/>
            </section>
        </main>
    )
}
export default Homepage
