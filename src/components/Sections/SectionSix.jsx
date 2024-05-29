import {useEffect, useRef} from 'react';
import "./SectionSix.scss";
import FrameOne from "../Frames/FrameOne.jsx";
import FrameTwo from "../Frames/FrameTwo.jsx";
import FrameThree from "../Frames/FrameThree.jsx";

const SectionSix = () => {
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
            top: 0,
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    };


    return (
        <section className="frame-container" onWheel={handleScroll}>

            <div className="scroll-container">
                <div className="header-content">
                    <h1>Why choose Zwilt?</h1>
                    <p>We take complex hiring processes - and simplify them. Connecting
                        you to the world's highly qualified
                        talent pool.
                    </p>
                </div>
               <FrameOne/>
               <FrameTwo />
               <FrameThree/>
            </div>
        </section>
    );
};

export default SectionSix;
