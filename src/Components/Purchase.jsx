import React from 'react';
import backhome from"../Assets/Discover/Rectangle 27.png";
import styled from 'styled-components';
import arrow from "../Assets/Home/Forward Button.png";

const PurchaseSection=styled.section`
    
`;
const PurchaseHome=styled.div`
    
`;
const PurchaseBackground=styled.div`
    width:80%;
    margin: auto;
`;
const PurchaseBack=styled.img`
    width: 80%;
    position:absolute;
`;
const ContentContainer=styled.div`
    position:relative;
    top:0;
    left:0;
    width:56%;
    background-color: #fff;
    box-shadow: 5px 5px #d1d0d0;
    padding: 28px 28px 20px 28px;
    border-radius: 5px;
`;
const ContentHead=styled.h1`
  font-size: 30px;
`;
const ContentPara=styled.p`
   
`;
const ContentButtonContainer=styled.div`
    display:flex;
    background-color:#9747FFD9 ;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
  
`;
const ContentButton=styled.button`
    background-color: transparent;
    border:none;
    font-size:16px;
   
`;
const ContentArrow=styled.img`
    padding-left: 16px;
`;
const Purchase = () => {
  return (
    <>
    <PurchaseSection>
        <PurchaseHome>
        <PurchaseBackground>
            <PurchaseBack src={backhome} alt="img"/>
            <ContentContainer>
                <ContentHead>Discover,Purchase and Claim Your Dream home</ContentHead>
                <ContentPara>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis, voluptatem libero natus modi aspernatur culpa illum vitae quod ea! Quisquam aspernatur, commodi blanditiis suscipit obcaecati porro reprehenderit at cumque laudantium culpa! Debitis eos dolor animi provident accusamus aspernatur quod, dolore ex dolorem porro ipsa rerum officiis voluptates natus assumenda. Excepturi cumque rerum pariatur labore cum impedit cupiditate facilis placeat beatae ullam tenetur, quos nihil facere quod dignissimos recusandae sunt sequi ipsam amet voluptates quam magni quo. Recusandae voluptatem quo fuga, ad, </ContentPara>
                <ContentButtonContainer>
                    <ContentButton>
                        Explore
                    </ContentButton>
                    <ContentArrow src={arrow} alt="img"/>    
                </ContentButtonContainer>
            </ContentContainer>
        </PurchaseBackground>
        </PurchaseHome>
    </PurchaseSection>
    
    </>
  )
}

export default Purchase
