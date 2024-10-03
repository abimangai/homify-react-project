import React from 'react';
import styled from 'styled-components';
import homeimg from '../Assets/Discover/Rectangle 35.png' 

const StorySection =styled.section`
margin-top: 30%;

`;
const StoryContainer =styled.div`
margin: auto;
width: 80%;
`;
const StoryHead =styled.h4`
font-size: 20px;
padding-bottom: 0;
margin-bottom: 0;
/* text-decoration: underline; */
`;
const StoryHeading =styled.h1`
font-size: 30px;
`;
const StoryPara =styled.p`

`;
const ContentContainer =styled.div`
display:flex;
margin: auto;
width: 80%;
`;
const RightContainer=styled.div`
width: 46%;
`;
const ContentHead =styled.h1`

`;
const ContentHeadSpan =styled.span`
 color:#9747FFD9;
`;
const ContentRight =styled.div`
display:flex;
`;
const ContentLists =styled.ol`
font-size: 20px;

`;
const ContentList=styled.li`
font-weight: 600;
`;
const ContentListSpan=styled.span`
font-weight: 200;
font-size:18px;
`;
const LeftContainer=styled.div`
width:20%;

`;
const LeftImg =styled.img`
padding: 20px;
`;
const Line = styled.hr`
float:left;
 width: 110px;
 background-color:#9747FFD9;
 height: 3px;
`;
const Story = () => {
  return (
    <>
    <StorySection>
        <StoryContainer>
            <StoryHead>Welcome to </StoryHead><Line/><br />
            <StoryHeading>Our Story</StoryHeading>
            <StoryPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat autem ipsa earum, accusantium, a quas eos explicabo tenetur hic magnam deleniti odit harum? Quae ullam repudiandae voluptatem sapiente praesentium.</StoryPara>

        </StoryContainer>
        <ContentContainer>
           <RightContainer>
            <ContentHead>Why <ContentHeadSpan>Choose Us ?</ContentHeadSpan></ContentHead>
            <ContentRight>
                <ContentLists>
                  <ContentList>Expertise:<ContentListSpan>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, facilis.A home, or domicile, is a space used as a permanent or semi-permanent residence for one or more human occupants</ContentListSpan></ContentList>
                  <ContentList>Personalized service:<ContentListSpan>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, facilis.</ContentListSpan></ContentList>
                  <ContentList>Wide Selection:<ContentListSpan>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, facilis.</ContentListSpan></ContentList>
                  <ContentList>Transparent Communication:<ContentListSpan>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, facilis.</ContentListSpan></ContentList>
                  <ContentList>Exceptional Support:<ContentListSpan>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, facilis.</ContentListSpan></ContentList>
                  <ContentList>Client Satisfaction:<ContentListSpan>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, facilis.</ContentListSpan></ContentList>
                </ContentLists>
            </ContentRight>
            </RightContainer>
            <LeftContainer>
                <LeftImg src={homeimg} alt="img"/>
            </LeftContainer>
        </ContentContainer>
    </StorySection>
    </>
  )
}

export default Story
