import Parallax from 'react-springy-parallax';
import React, { Component } from "react";
// Components
import Accordian from "../Components/Accordian.js";
import Footer from "../Components/Footer.js";
import ProgressBar from "../Components/ProgressBar.js";
// Images
import A from "../Images/ghana.jpg";
import B from "../Images/blind.jpg";
import C from "../Images/mutual.jpg";
import D from "../Images/tassel.jpg";
import E from "../Images/glass.jpg";

export default class OurValues extends Component {

    render() {
        return (
            <div>
                <Parallax pages={1}>
                    <ProgressBar
                      continueLink={"#/OurBehaviours"}
                      currentIndex={2}
                      stepLabels={[
                        <a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
                        <a href='#/History' style={{color: 'white'}}>Our History</a>,
                        <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
                        "Our Behaviours",
                        "Our SBU's",
                        "Key Information",
                        "Meet your Team",
                        "Finish Up"
                      ]}
                    />
                    <Accordian
            		    //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
                        tabLabels={["Valuing People", "Integrity", "Mutuality", "Creativity", "Professionalism"]}
                        tabDescriptions={[
                            "Giving people the opportunity to use and develop their talents.",
                            "Being consistent both in what we do and say.",
                            "Putting effective relationships at the heart of our work.",
                            "Actively seeking and presenting the best in creativity.",
                            "Listening to and valuing the ideas and opinions of others."
                        ]}
                        tabBackgrounds={[
                            A,
                            B,
                            C,
                            D,
                            E
                        ]}
            		    tabHeight={"1090.5px"} /*when tested in board room this was the right size*/
                    />
                    <Footer />
                </Parallax>
            </div>
        );
    }
}