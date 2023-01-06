import React from 'react';
import Banner from '../../components/Banner/Banner';
import background from "../../assets/images/about-background.png";
import Collapse from '../../components/Collapse/Collapse';

const About = () => {
    return (
        <div>
            <Banner background={background} />
            <Collapse />
        </div>
    );
};

export default About;