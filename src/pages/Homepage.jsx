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
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <FooterSection/>

        </main>
    )
}
export default Homepage
