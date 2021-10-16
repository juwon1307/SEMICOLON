import React from 'react';
import hmo from "../../components/images/hmo.jpeg"
import {
    DashBoardContainer, 
    DashBoardMsg,
    ImageBg,
    Img,
    DashBoardP,
    DashBoardH1
   } from './DashBoard.element';

const DashBoard = () => {
    return (
        
                <DashBoardContainer>
                    <ImageBg>
                    <Img src={hmo} alt="dash" />
                    </ImageBg>
                    <DashBoardMsg>
                        <DashBoardH1>Who We Are</DashBoardH1>
                        <DashBoardP>We are passionate about building the people
                         that will build the companies that will build 
                         Africa. We are problem solvers, technologists 
                         and optimists of a better future for Africa. 
                         We bring this to life by identifying talented 
                         minds, guiding them through innovative 
                         training, deploying them effectively and 
                         collaborating with others to build sustainable 
                         solutions for society.
                         </DashBoardP>
                    </DashBoardMsg>
                </DashBoardContainer>
        
    )
}

export default DashBoard;
