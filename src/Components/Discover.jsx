import React from 'react';
import styled from 'styled-components';
import homeone from "../Assets/Discover/Rectangle 23.png";
import hometwo from "../Assets/Discover/Rectangle 24 (1).png";
import homethree from "../Assets/Discover/Rectangle 25.png";
import homefour from "../Assets/Discover/Rectangle 26.png";

const DiscoverSection =styled.div`
    width: 80%;
    margin: auto;
    margin-top:40px;

`;
const DiscoverHead =styled.h1`
    align-items:center;
    text-align: center;
`;
const DiscoverContainer =styled.div`
     display:flex;
     align-items:center;
     justify-content:center;
     gap:1rem;
`;
const DiscoverContain =styled.div`
   
`;
const DiscoverImage =styled.img`
    width: 100%;
`;
const DiscoverPara=styled.p`
    align-items:center;
    text-align: center;
    font-size:20px;
`;


const Discover = () => {
  return (
   <>
   <DiscoverSection>
    <DiscoverHead>
        Discover Our home Types...
    </DiscoverHead>
    <DiscoverContainer>
        <DiscoverContain>
            <DiscoverImage src={homeone} alt="img"/>
            <DiscoverPara>1500+ <br/>FormHouse</DiscoverPara>
        </DiscoverContain>

        <DiscoverContain>
            <DiscoverImage src={hometwo } alt="img"/>
            <DiscoverPara>1500+ <br/>FormHouse</DiscoverPara>
        </DiscoverContain>

        <DiscoverContain>
            <DiscoverImage src={homethree} alt="img"/>
            <DiscoverPara>1500+ <br/> FormHouse</DiscoverPara>
        </DiscoverContain>

        <DiscoverContain>
            <DiscoverImage src={homefour} alt="img"/>
            <DiscoverPara>1500+ <br/>FormHouse</DiscoverPara>
        </DiscoverContain>
    </DiscoverContainer>
   </DiscoverSection>
   
   </>
  )
}

export default Discover
