import React from 'react';
import styled from 'styled-components';
import phone from "../Assets/Download/Screenshot_2024-05-16_225021-removebg-preview 1.png";
import leafone from "../Assets/Download/Vector (6).png";
import leaftwo from "../Assets/Download/Vector (7).png";
import appstore from "../Assets/Download/pngegg 1.png";
import googlepay from "../Assets/Download/pngegg 2.png";
import android from "../Assets/Download/Android Phone.png";
import homify from "../Assets/Home/logo.png";

const DownloadSection=styled.section`
background-color: #B984FF99;
`;
const DownloadContainer=styled.div`
width: 80%;
margin: auto;
`;
const LeftContainer=styled.div`

`;
const PhoneImage =styled.img`
position: absolute;
`;
const LeafOneImage=styled.img`
position: relative;
margin-top:30%;
bottom:0;
`;
const LeafTwoImage=styled.img`
margin-bottom:30%;
margin-right: 40%;
`;
const RightContainer=styled.div`

`;
const RightHead=styled.h2`

`;

const RightHeadSpan=styled.span`

`;

const RightPara=styled.para`

`;

const ListContainer=styled.div`

`;

const ContainerList=styled.div`

`;

const ContainerImg=styled.img`

`;

const ContainerContent=styled.h4`

`;
const DownloadAppContainer=styled.div`

`;
const DownloadApp=styled.img`

`;
const HomifyContainer=styled.div`

`;
const HomifyImage=styled.img`

`;




const download = () => {
  return (
    <>
    <DownloadSection>
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
    </DownloadSection>
    </>
  )
}

export default download;
