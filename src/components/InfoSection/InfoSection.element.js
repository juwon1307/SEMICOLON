import styled from "styled-components";

export const InfoSec = styled.div`
color: #fff;
padding: 160%;
background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px 15px 15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')}
`;     

export const Container = styled.div`
`

export const InfoColumn = styled.div`

`

export const TextWrapper = styled.div`
 
`