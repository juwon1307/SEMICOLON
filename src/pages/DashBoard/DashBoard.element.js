import styled from 'styled-components';


export const DashBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

export const ImageBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`; 

export const Img = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const DashBoardMsg = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DashBoardH1 = styled.h1`
font-size: 60px;
color: #FF0000;
`;

export const DashBoardP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 19px;
`
