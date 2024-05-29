import {useState} from 'react'
import "./SecctionOne.scss"
import Icon2 from "../../assets/icons/Icon2.png"
import UnionImg from "../../assets/images/Union.png"
import zwiltGif from "../../assets/images/zwilt-gif.gif"

const SectionOne = () => {
    const [activeTab, setActiveTab] = useState('tab-1');
    return (
        <div className="section-one">
            <h1>Finding the right fit <img src={zwiltGif} alt=""/> has never been easier.</h1>

            <p>With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever
                again.</p>


            <div className="section-one-input">
                <input type="text" placeholder="Looking for design |"/>
                <button><img src={Icon2} alt=""/></button>
            </div>

            <div className="tab-container">
                <div className="tab">
                    <div
                        className={`tab-1 ${activeTab === 'tab-1' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tab-1')}>
                        <button>IT & Development</button>
                    </div>

                    <div
                        className={`tab-2 ${activeTab === 'tab-2' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tab-2')}>
                        <button>Design and Creative</button>
                    </div>
                    <div className={`tab-slider ${activeTab}`}></div>
                </div>

                <div className="list-container">
                    <ul>
                        <li>Python Developer</li>
                        <li>Shopify Developer</li>
                        <li>MERN Stack Developer</li>
                        <li>Full Stack Developer</li>
                    </ul>

                    <ul>
                        <li>Data Scientist</li>
                        <li>Front End Developer</li>
                        <li>Shopify Developer</li>
                        <li>Python Developer</li>
                    </ul>

                    <ul>
                        <li>Shopify Developer</li>
                        <li>Python Developer</li>
                        <li>Full Stack Developer</li>
                        <li>Explore More</li>
                    </ul>
                </div>
            </div>

            <div className="section-one-image">
                <img src={UnionImg} alt="Union-image"/>
            </div>

        </div>
    )
}
export default SectionOne
