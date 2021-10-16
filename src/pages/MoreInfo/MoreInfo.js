import React from 'react';
import {  FaEmpire, FaSketch } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import {
    MoreContainer,
    FirstMore,
    FirstMoreLogo,
    SecondMore,
    SecondMoreLogo,
    ThirdMore,
    ThirdMoreLogo,
} from './MoreInfo.element';

const MoreInfo = () => {
    return (
        <>
            <MoreContainer>
                <FirstMore>
                    <FirstMoreLogo>
                        <GiTechnoHeart/>
                    </FirstMoreLogo>
                    <h1>Our Core</h1>
                    <p>
                            We are a social enterprise, on a journey to transform 
                        individuals, industries and communities in Africa, 
                        by spurring them towards solving problems with a focus 
                        on talent, technology and innovation.
                    </p>
                </FirstMore>
                    
                <SecondMore>
                    <SecondMoreLogo>
                        <FaEmpire/>
                    </SecondMoreLogo>
                    <h1>Our Mission</h1>
                    <p>
                        Develop a generation of engineering talent 
                        that will solve problems faced by Africa and 
                        the world.
                    </p>
                </SecondMore>

                <ThirdMore>
                    <ThirdMoreLogo>
                        <FaSketch/>
                    </ThirdMoreLogo>
                    <h1>Our Vision</h1>
                    <p>
                        Africa will be home to a talented, thriving 
                        technology community that leads the world in 
                        innovation.
                    </p>
                </ThirdMore>
            </MoreContainer>
        </>
    )
}

export default MoreInfo;
