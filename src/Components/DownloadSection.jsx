import React from 'react';
import styled from 'styled-components';
import phone from "../Assets/Download/Screenshot_2024-05-16_225021-removebg-preview 1.png";
import leafone from "../Assets/Download/Vector (6).png";
import leaftwo from "../Assets/Download/Vector (7).png";
import appstore from "../Assets/Download/pngegg 1.png";
import googlepay from "../Assets/Download/pngegg 2.png";
import android from "../Assets/Download/Android Phone.png";
import homify from "../Assets/Home/logo.png";


const DownloadSec=styled.section`
background-color: #B984FF99;
padding: 2% 3%;
`;
const DownloadContainer=styled.div`

width: 90%;
height: 100vh;
margin: auto;
display:flex;
justify-content: space-between;
`;
const LeftContainer=styled.div`
position: relative;
/* padding: 30px; */
`;
const PhoneImage =styled.img`
z-index: 100;
padding: 20px;
height: 100%;
`;
const LeafOneImage=styled.img`
position: absolute;
bottom:0;
left:0;
z-index: 200;

`;
const LeafTwoImage=styled.img`
position: absolute;
top:0;
right: 0;
z-index: -100;
`;
const RightContainer=styled.div`
margin-top: 30px;
`;
const RightHead=styled.h2`
font-size:40px;
`;

const RightHeadSpan=styled.span`
color:#9747FFD9;
`;

const RightPara=styled.p`

`;

const ListContainer=styled.div`

`;

const ContainerList=styled.div`
display:flex;
padding-top: 20px;
`;

const ContainerImg=styled.img`
height: 30px;

`;

const ContainerContent=styled.h4`
margin:0px;
`;
const DownloadAppContainer=styled.div`
margin-top: 20px;
`;
const DownloadApp=styled.img`

`;
const HomifyContainer=styled.div`

`;
const HomifyImage=styled.img`
width:30%;
float:right;
`;

const DownloadSection = () => {
  return (
    <>
    <DownloadSec>
        <DownloadContainer>
        <LeftContainer>
           <PhoneImage src={phone} alt="img"/>
           <LeafOneImage src={leafone} alt="img"/>
           <LeafTwoImage src={leaftwo} alt="img"/>
        </LeftContainer>
        <RightContainer>
           <RightHead>Download the <RightHeadSpan>Homify </RightHeadSpan>App</RightHead>
           <RightPara>Discover the convenience of finding your dream home right at your fingertips with the homify App.</RightPara>
           <ListContainer>
              <ContainerList>
                <ContainerImg src={android} alt=""/>
                <ContainerContent>Easy Search Functionality</ContainerContent>
              </ContainerList>

              <ContainerList>
                <ContainerImg src={android} alt=""/>
                <ContainerContent>Personalized Recommendations</ContainerContent>
              </ContainerList>

              <ContainerList>
                <ContainerImg src={android} alt=""/>
                <ContainerContent>Instant Notifications</ContainerContent>
              </ContainerList>

           </ListContainer>

           <DownloadAppContainer>
               <DownloadApp src={appstore } alt="img"/>
               <DownloadApp src={googlepay} alt="img"/>
           </DownloadAppContainer>

           <HomifyContainer>
            <HomifyImage src={homify} alt="image"/>
           </HomifyContainer>

        </RightContainer>
        </DownloadContainer>
    </DownloadSec>
    </>
  )
}

export default DownloadSection;
