import React from 'react'
import map from "../Assets/Form/Rectangle 110.png";
import styled from 'styled-components';


const Formsection =styled.section`
    width: 80%;
    margin: auto;
    
`;
const FormContainer =styled.div`
    display:flex;
       
`;
const FormLeftContainer =styled.div`
    width:50%;
    margin-top: 5%;
`;
const FormHead =styled.h1`
    font-size:30px;
`;
const FormPara=styled.p`
    
`;
const FormMap =styled.img`
    width: 100%;
`;
const FormRightContainer =styled.div`
    padding: 5% 10%;
    border:1px solid #9747FFD9;
    margin: 5% 0% 5% 10%;
    border-radius:5px;
    
`;


const FormDetail =styled.div`
    input{
        border:1px solid #9747FFD9;
        border-radius: 5px;
        padding:10px;
        margin:5px 0px 10px 20px;
    }
    
`;
const FormLabel =styled.label`
    font-size:20px;
`;
const EmailLabel =styled.label`
        font-size:20px;
`;
const MobileLabel =styled.label`
        font-size:20px;
`;
const SubmitButton =styled.div`
   align-items:center;
        display: flex;
        justify-content: center;
    input{
        background-color: #9747FFD9;
        padding: 10px;
        font-size: 20px;
        border:1px solid #9747FFD9;
        border-radius: 5px;
        margin-top:20px;
     

    }
`;


const Form = () => {
  return (
   <>
   <Formsection>
      <FormContainer>
        <FormLeftContainer>
           <FormHead>Stay Updated with Homify's Exclusive Offrers..!</FormHead>
           <FormPara>
           We are homify - the platform for Home and Living! Whether the right architect or simply inspiration - we offer everything that home lovers need for planning, renovating and decorating their home.!!!!!

           </FormPara>
           <FormMap src={map} alt="img"/>
        </FormLeftContainer>
      <FormRightContainer>
        <FormDetail>
          <FormLabel>FirstName</FormLabel><br/>
          <input type="text" name="fname" class=""/><br/>
          <FormLabel>LastName</FormLabel><br/>
          <input type="text" name="lname"  /><br/>
          <EmailLabel for="email" >Email Address</EmailLabel><br/>
          <input type="text" /><br/>
          <MobileLabel for="email" >Mobile  Number</MobileLabel><br/>
          <input type="text" /><br/>
        </FormDetail>

          <SubmitButton>
          <input type="submit" value="Submit Now" class="submit"/>
          </SubmitButton>
      </FormRightContainer>

    
      </FormContainer>
   </Formsection>
   <hr/>

   </>
  )
}

export default Form
