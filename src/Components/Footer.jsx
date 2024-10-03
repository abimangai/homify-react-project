import React from 'react';
import insta from "../Assets/Footer/Group 56.png";
import mail from "../Assets/Footer/Group 57.png";
import whatsapp from "../Assets/Footer/Group 58.png";
import logo from "../Assets/Home/logo.png";
import arrow from "../Assets/Footer/Paper Plane.png";
import styled from 'styled-components';

const FooterSection=styled.div`
  
    margin:0;
    padding: 0;
    padding-top: 20px;
`;
const FooterContainer=styled.div`
    display:flex;
    justify-content:space-between;   
    width: 80%;
    margin: auto;
`;
const FooterFirstContainer=styled.div`
    width: 25%;
`;
const Headerimg=styled.img`
    width:70%;
    left:0;
    top:0;
  
`;
const ParaContainer=styled.div`
    padding-left: 30px;
`;
const LogoContainer =styled.div`
 padding-left:30px;
 padding-top:10px;
`;
const Instaimg =styled.img`
    padding-right: 10px;
  
`;
const Mailimg=styled.img`
      padding-right: 10px;
`;
const Whatsappimg =styled.img`
    
`;


const FooterMiddleContainer=styled.div`
    display:flex;
    justify-content:space-between;
    gap:5rem;
    margin-top:1.5%;
    
`;
const MiddleOne=styled.div`
    /* width: 25%; */
   
`;
const MiddleHead=styled.h2`
    margin: 0;
`;
const MiddleLists=styled.ul`
    
`;
const MiddleList=styled.li`
    list-style: none;
    padding-top:10px;
`;
const MiddleTwo=styled.div`
    
`;
const FooterLastContainer=styled.div`
    width: 25%;  
`;
const LastHead=styled.h2`
    color: #9747FFD9;
    margin-top:10px;
`;
const LastPara=styled.p`
    
`;
const LastInputBox=styled.div`
border:1px solid #9747FFD9;
align-items: center;
display:flex;
justify-content: center;

    input{
        border:none;
        padding:10px ;
    }
`;
const ArrowImage=styled.img`
    
`;
const DownContainer=styled.div`
    background-color:#9747FFD9;
    display: block;
`;
const DownText=styled.p`
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Footer = () => {
  return (
   <>
   <FooterSection>
    <FooterContainer>
        <FooterFirstContainer>
            <Headerimg src={logo} alt=""/>
        <ParaContainer>
        Homify is dedicated to helping you find your dream home. With years of experience in the real estate market, we provide top-notch services to buyers, sellers, and investors.
        </ParaContainer>
        <LogoContainer>
            <Instaimg src={insta} alt=""/>
            <Mailimg src={mail} alt=""/>
            <Whatsappimg src={whatsapp} alt=""/>
        </LogoContainer>
        </FooterFirstContainer>

        <FooterMiddleContainer>
            <MiddleOne>
            <MiddleHead>QuickLinks</MiddleHead>
            <MiddleLists>
                <MiddleList>Listings</MiddleList>
                <MiddleList>Buy</MiddleList>
                <MiddleList>Sell</MiddleList>
                <MiddleList>Find an Agent</MiddleList>
            </MiddleLists>
            </MiddleOne>

            <MiddleTwo>
            <MiddleHead>Legal</MiddleHead>
            <MiddleLists>
                <MiddleList>Privacy Policy</MiddleList>
                <MiddleList>Terms Of Service</MiddleList>
                <MiddleList>Conatct Us</MiddleList>
                <MiddleList>About Us</MiddleList>
            </MiddleLists>
            </MiddleTwo>
        </FooterMiddleContainer>

        <FooterLastContainer>
             <LastHead>Subscribe To Our Newsletter </LastHead>
             <LastPara>Stay updated with the latest real estate news, listings, and tips</LastPara>
             <LastInputBox>
                <input type="text" placeholder='example@gmail.com'/>
                <ArrowImage src={arrow} alt=""/>
             </LastInputBox>
        </FooterLastContainer>
    </FooterContainer>
    <DownContainer>
        <DownText>@2024 Homify.. | All Rights Reserved...</DownText>
    </DownContainer>
   </FooterSection>
   


   </>
  )
}

export default Footer

