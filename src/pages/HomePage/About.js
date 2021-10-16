import React from 'react';
import img from '../../components/images/img.jpeg';
import {
  HomeContainer,
  HomeInfo,
  HomeImage,
  Img,
} from './About.elements';

const About = () => {
  return (
    <>
        <HomeContainer>
            <HomeInfo>
              <h1>Talents. Renovation.</h1>
              <p>
                We are passionate about identifying talented minds, guiding them
                through innovative training, tech-talent deployment and
                sustainable solutions for society.
              </p>
            </HomeInfo>
          
          <HomeImage>
            <Img src={img} alt="homies" />
          </HomeImage>
        </HomeContainer>
    </>
  );
}

export default About;
