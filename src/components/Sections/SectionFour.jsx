import { useState } from 'react';
import "./SectionFour.scss";
import PlayBtn from "../../assets/icons/playBtn1.png";
import AccordionData from "../../lib/accordionData.js";

const SectionFour = () => {
    const [data, setData] = useState(AccordionData)
    const [activeId, setActiveId] = useState(null)
    const [clickedId, setClickedId] = useState(null)

    const handleAccordionClick = (id) => {
        setActiveId(activeId === id ? null : id)
        setClickedId(clickedId === id ? null : id)
    };

    return (
        <section className="sectionFour">
            <div className="content">
                <h1>How we ensure you’re in good hands.</h1>
                <p>With our comprehensive screening process, we hand-pick
                    highly skilled candidates so you can onboard them
                    in a matter of days.
                </p>

                {data.map((item) => (
                    <div className="step-1" key={item.id} onClick={() => handleAccordionClick(item.id)}>
                        <div className="step-content-header">
                            <div className={`playBtn ${clickedId === item.id ? 'active' : ''}`}>
                                <img src={PlayBtn} alt="play button" />
                            </div>
                            <h3>{item.step}<span>{item.title}</span></h3>
                        </div>
                        {activeId === item.id ? <p>{item.description}</p> : null}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFour;
