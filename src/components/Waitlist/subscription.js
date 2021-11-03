import React from 'react';
import styled from "styled-components";
import logo from "../../images/logo.png";
import doctors from "../../images/doctors.png";

const DivContainer = styled.div`
  width: 85%;
  margin: 1rem auto;
`
const IMG = styled.img`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 0 auto;
`
const H1 = styled.h1`
  font-size: 2.7rem;
  padding-bottom: 2rem;
  text-align: center;
`
const H2 = styled.h2`
  font-size: 1.2rem;
  padding-bottom: 1.2rem;
  /* text-align: center; */
`
const Paragraph = styled.p`
  line-height: 1.6rem;
`
const List = styled.ul`
  padding: 1rem 1.9rem;
  list-style: circle;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.3rem;
`
const FormGroup = styled.div`
  padding: 0 4rem;
  /* width: 80%; */
`
const Input = styled.input`
  padding: 0.3rem 2rem;
  margin: 1rem 0;
  width: 100%;
`
const Label = styled.label`
  display: block;
  width: 100%;
`
// const Background = styled.div`
//   /* background-image: linear-gradient(to right bottom, '#62DA92', '#014027'), `url(${doctors})`; */
// `

const Subscription = () => {
  return (
    <div style={{backgroundImage: `url(${doctors})`, backgroundPosition: '1200px 350px', backgroundSize: '400px', backgroundRepeat: 'no-repeat'}}>
      <div >
        <IMG src={logo} height='150px' width='150px' alt="logo"/>
        <H1>Welcome To CareHive</H1>
      </div>
      <div>
      <DivContainer>
        <H2>About Us</H2>
      {/*<Paragraph>
        Get access to quick, efficient and personalised healthcare from leading helath service professional at your convenience.style={{backgroundColor: '#62DA92', padding: '2rem 0rem'}}
      </Paragraph>*/}
      {<Paragraph>
        We at care Hive believe that access to health care services should be personalizable
        and convenient in such a way as to accommodate our different needs and preferences.
        From medical consultations to routine checkups to emergency response to lifestyle guidance, 
        we are on mission to make access to healthcare quick, responsive, personalized, efficient and affordable. 
        We are working with leading health service professionals and health care centers to curate a premium health care service experience for our user. 
        Our service will include 
      </Paragraph>}
      <List>
        <li>
          Telemedical services
        </li>
        <li>
          Personalized health monitoring
        </li>
        <li>
          Remote health service delivery
        </li>
        <li>
          Medical records keeping
        </li>
        <li>
          Remote diagnostics services
        </li>
        <li>
          Therapy scheduling
        </li>
        <li>
          Access to over 100+ healthcare specialists across all medical fields
        </li>
      </List>
      </DivContainer>
      <div style={{ backgroundColor: '#F4F9F7', }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '85%', margin: '0 auto' }}>
        <Paragraph>Be the first to know when we launch by signing up below with your email and phone number</Paragraph>
        <Form>
        <div>
          <FormGroup>
            <Label>Email</Label>
            <Input type='text' placeholder="Enter email address" />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input type='tel' placeholder="Enter phone number" />
          </FormGroup>
          <FormGroup>
            <button>Join Waitlist</button>
          </FormGroup>
        </div>
      </Form>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Subscription;