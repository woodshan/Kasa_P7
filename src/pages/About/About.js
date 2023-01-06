import React from "react";
import Banner from "../../components/Banner/Banner";
import background from "../../assets/images/about-background.png";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  return (
    <div>
      <Banner background={background} />
      <Collapse>
        <h3>Fiabilité</h3>
      </Collapse>
      <Collapse>
        <h3>Respect</h3>
      </Collapse>
      <Collapse>
        <h3>Service</h3>
      </Collapse>
      <Collapse>
        <h3>Sécurité</h3>
      </Collapse>
    </div>
  );
};

export default About;
