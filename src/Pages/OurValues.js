import Parallax from 'react-springy-parallax';
import React, { Component } from "react";

import Accordian from "../Components/Accordian.js";
import Footer from '../Components/Footer';
import ProgressBar from "../Components/ProgressBar.js";

export default class OurValues extends Component {

    render() {
        return (
            <div>
                <Parallax pages={1.95}>
                    <ProgressBar
                      continueLink={"#/OurBehaviours"}
                      currentIndex={1}
                      stepLabels={[
                        "Our History",
                        "Our Values",
                        "Our Behaviours",
                        "Our SBU's",
                        "Key Information"
                      ]}
                    />
                    <Accordian
            		    //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
                        tabLabels={["val1", "val2", "val3", "val4", "val5"]}
                        tabDescriptions={[
                            "descrip1",
                            "descrip2",
                            "descrip3",
                            "descrip4",
                            "descrip5"
                        ]}
                        tabBackgrounds={[
                            "url(http://lorempixel.com/600/600/nature/1)",
                            "url(http://lorempixel.com/600/600/nature/2)",
                            "url(http://lorempixel.com/600/600/nature/3)",
                            "url(http://lorempixel.com/600/600/nature/4)",
                            "url(http://lorempixel.com/600/600/nature/5)"
                        ]}
            		    tabHeight={"1000px"}
                    />
                </Parallax>
            </div>
        );
    }
}