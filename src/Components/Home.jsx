import React from 'react'
import background from "../Assets/Home/background.png";
import star from "../Assets/Home/star.png";
import home from "../Assets/Home/home.png";
import styled from "styled-components";
import logo from "../Assets/Home/logo.png";
import arrow from "../Assets/Home/Forward Button.png";
import imageone from "../Assets/Home/Ellipse 5.png";
import imagetwo from "../Assets/Home/Ellipse 4.png";
import imagethree from "../Assets/Home/Ellipse 3.png";
import imagefour from "../Assets/Home/Ellipse 2 (1).png";
import imagefive from "../Assets/Home/Ellipse 1.png";
import house from "../Assets/Home/House.png";
import location from "../Assets/Home/Place Marker.png";
import money from "../Assets/Home/Money Bag Rupee.png";
import searchicon from "../Assets/Home/Search.png";


import {  Link } from "react-router-dom";
import Discover from './Discover';
import Purchase from './Purchase';
import Story from './Story';
// import Download from './download';
import DownloadSection from './DownloadSection';
import Form from './Form';
import Footer from './Footer';


const HomeSection = styled.div`
`;
const HomeContainer = styled.div`
`;
const HomeBackground = styled.img`
width:100%;
height: 142vh;
object-fit: cover;
left:0;
top:0;
position:absolute;
filter:brightness(0.4);

`;
const NavBarContainer = styled.div`
`;
const NavBarContent = styled.div`
background-color:#fff;
position: relative;
margin: auto;
width:80%;
border-radius: 5px;
padding: 0px;
margin-top: 50px;
`;
const NavBar = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
`;
const NavList = styled.ul`
display:flex;
margin:0px;
padding:0px;
gap:1rem;
`;

const ListName = styled.li`
list-style: none;
font-size:24px;
`;

const NavLogo = styled.img`

`;
const ContentContainer = styled.div`
   width: 75%;
   margin: auto;
   background-color: #fff;
   position:relative;
   margin-top:30px;
   padding: 30px;
   border-radius:10px;
   display:flex;
   
  
`;

const LeftContainer = styled.div`


`;
const LeftContentImg = styled.img`
position:relative;
 height:90vh;

`;
const RightContainer = styled.div`
padding: 30px;

`;
const RightTop = styled.h1`
font-size:40px;
`;
const RightTopSpan = styled.span`
color:#9747FFD9;

`;
const RightPara = styled.p`
font-size:18px;

`;
const ExploreButton = styled.div`
display:flex;
background-color:#9747FFD9 ;
width:45%;
padding: 18px ;
padding-right:0px;
border-radius: 10px;

`;
const RightButton = styled.button`
background-color: transparent;
border:none;
font-size: 20px;
`;
const ButtonArrow = styled.img`

`;
const RightBottom = styled.div`
display:flex;

`;
const RightBottomContent = styled.div`
margin-top:20px;
width:50%;

`;
const RightCont = styled.div`
display:flex;
`;
const StarImage = styled.img`


`;
const Rating = styled.h2`
padding-left: 5px;
`;
const RightDown = styled.p`
margin: 0px;

`;
const RightBottomImage = styled.div`
margin-top:15%;
width:50%;
`;
const RightBotImg = styled.img`
width: 45px;
`;
const BuyContainer = styled.div`
background-color: #ffff;
/* border:1px solid #7e7d7d; */
width:50%;
margin: auto;
position:relative;
border-top-right-radius:10px;
border-top-left-radius:10px;
margin-top: 20px;
box-shadow: 3px 5px  #b3b2b2;

`;
const BuyContain = styled.div`

`;
const BuyCont = styled.ul`
display:flex;
justify-content:center;
align-items:center;

hr{
  height: 50px;
  color:#000;
}
`;
const BuyCon = styled.li`
list-style:none;
padding:25px;
margin-right: 0px;
border-top-right-radius:10px;
border-top-left-radius:10px;
&:hover{
background-color:#9747FFD9 ;
color:#ffff;
}
`;
const DetailsContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #fff;
border-radius: 10px;
width:85%;
margin:auto;
/* border:1px solid #7e7d7d; */
box-shadow: 3px 5px  #b3b2b2;
select{
 margin-left: 50px;
 border:none;
}
`;
const DetailContainer = styled.div`
padding: 15px;
justify-content:space-around;

`;
const DetailContain = styled.div`
display:flex;


`;
const DetailImage = styled.img`

`;
const DetailHead = styled.p`
font-size:18px;
font-weight: bold;
padding-left: 10px;
`;
const DetailSearch = styled.div`
display:flex;
justify-content:space-around;
align-items: center;
background-color:#9747FFD9 ;
border-radius:10px;
padding: 5px;
width: 140px;
margin-top: 15px;

`;
const DetailSearchButton = styled.button`
background-color: transparent;
border:none;
color:#fff;
font-size:18px;

`;
const SearchIcon = styled.img`

`;


const Home = () => {
  return (
    <>
      <HomeSection>
        <HomeContainer>
          <HomeBackground src={background} alt="img" />


          <NavBarContainer>
            <NavBarContent>
              <NavBar>
                <NavList>
                  <ListName>Home</ListName>
                  <ListName>About</ListName>
                </NavList>
                <NavLogo src={logo} alt="image" />
                <NavList>
                  <ListName>Contact</ListName>
                  <ListName>Properties</ListName>
                </NavList>
              </NavBar>
            </NavBarContent>
          </NavBarContainer>

          <ContentContainer>

            <LeftContainer>
              <LeftContentImg src={home} alt="" />
            </LeftContainer>

            <RightContainer>
              <RightTop>Find Your Dream Home with <RightTopSpan>Homify</RightTopSpan></RightTop>
              <RightPara>Discover the perfect property for your lifestyle and budget .Explore our wide selections of listings and find your home today.</RightPara>
              <ExploreButton>
                <RightButton>Explore Homes</RightButton>
                <ButtonArrow src={arrow} alt="img" />
              </ExploreButton>

              <RightBottom>
                <RightBottomContent>
                  <RightCont>
                    <StarImage src={star} alt="" />
                    <Rating>4.7 Rating</Rating>
                  </RightCont>
                  <RightDown>Join Our Community</RightDown>
                </RightBottomContent>
                <RightBottomImage>
                  <RightBotImg src={imageone} alt="img" />
                  <RightBotImg src={imagetwo} alt="img" />
                  <RightBotImg src={imagethree} alt="img" />
                  <RightBotImg src={imagefour} alt="img" />
                  <RightBotImg src={imagefive} alt="img" />

                </RightBottomImage>
              </RightBottom>
            </RightContainer>
          </ContentContainer>

          <BuyContainer>
            <BuyContain>
              <BuyCont>
                <BuyCon>Buy</BuyCon>
                <hr />
                <BuyCon>Sell</BuyCon>
                <hr />
                <BuyCon>Pg/Co-living</BuyCon>
                <hr />
                <BuyCon>Commercial</BuyCon>
                <hr />
                <BuyCon>Plot</BuyCon>
              </BuyCont>
            </BuyContain>
          </BuyContainer>
          <DetailsContainer>
            <DetailContainer>
              <DetailContain>
                <DetailImage src={house} alt="img" />
                <DetailHead>Properties type</DetailHead>
              </DetailContain>
              <select>
                <option>Single Family Home</option>
                <option>Double Family Home</option>
                <option>Three Bed Room Home</option>
              </select>
            </DetailContainer>
            <hr />

            <DetailContainer>
              <DetailContain>
                <DetailImage src={location} alt="img" />
                <DetailHead>Location</DetailHead>
              </DetailContain>
              <select>
                <option>Chennai</option>
                <option>Tanjavur</option>
                <option>Tirupur</option>
              </select>
            </DetailContainer>
            <hr />
            <DetailContainer>
              <DetailContain>
                <DetailImage src={money} alt="img" />
                <DetailHead>Price Range</DetailHead>
              </DetailContain>
              <select>
                <option>5 lakh</option>
                <option>10 lakh</option>
                <option>15 lakh</option>
              </select>
            </DetailContainer>
            <hr />
            <DetailContainer>
              <DetailContain>
                <DetailSearch>
                  <DetailSearchButton>Search</DetailSearchButton>
                  <SearchIcon src={searchicon} alt="" />
                </DetailSearch>
              </DetailContain>
            </DetailContainer>
          </DetailsContainer>

        </HomeContainer>
      </HomeSection>
<Discover/>
<Purchase/>
<Story/>
<DownloadSection/>
<Form/>
<Footer/>

    </>
  )
}

export default Home
