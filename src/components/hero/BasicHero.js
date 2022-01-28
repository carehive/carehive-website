import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { Container as ContainerBase, ContentWithPaddingXl, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"
import HeroImage from '../../images/HeroImage.png'
import { SliderButton } from "@typeform/embed-react";

const Header = tw(HeaderBase)`max-w-none mx-20`;
const Container = tw(ContainerBase)`bg-designs -mx-8`
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`max-w-xl text-left text-green-500 leading-snug xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg max-w-2xl`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-green-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-12 xl:-translate-y-16`;
const Image = tw.img`max-w-2xl  rounded-t sm:rounded relative z-20`; //w-96
const Offsetbackground = tw.div`absolute inset-0  rounded xl:-mb-8` //bg-green-100
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-lg rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 text-gray-900 font-medium transform md:translate-x-32 md:translate-y-24 text-sm leading-relaxed md:-mr-16 xl:mr-0` //bg-green-400
const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-8 h-8 md:w-4 md:h-4 absolute top-auto left-0 text-gray-100 md:text-blue-500 transform translate-x-1  md:-translate-y-5 opacity-10 md:opacity-100` //md:-translate-x-1/2
const Quote = tw.blockquote`right-0`
const CustomerName = tw.p`mt-4 font-bold`
const CustomerCompany = tw.p`mt-1 text-sm text-gray-300`
//https://images.pexels.com/photos/6098065/pexels-photo-6098065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
//https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMGJsYWNrJTIwbWVkaWNhbCUyMGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
//<button data-tf-slider="vyw0LRNz" data-tf-width="550" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#FFFFFF;font-size:22px;border-radius:27px;padding:0 36px;font-weight:bold;height:55px;cursor:pointer;line-height:55px;text-align:center;margin:0;text-decoration:none;">Launch me</button><script src="//embed.typeform.com/next/embed.js"></script>
export default ({
  heading = "Convenient and premium health care services for you.",
  description = "Get affordable, efficient and responsive healthcare services ranging from medical consultations to routine checkups to emergency response to lifestyle guidance and more.",
  imageSrc = "https://images.pexels.com/photos/6098065/pexels-photo-6098065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://zzc4y9hv6oi.typeform.com/to/vyw0LRNz",
  primaryButtonText = "Get Early Access",
  buttonRounded = false,
  testimonial = {
    quote: "We at care Hive believe that access to health care services should be personalizable and convenient in such a way as to accommodate our different needs and preferences.",
    customerName: "Dr. Ebube UD",
    customerCompany: "CareHive."
  }
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink>
        Solutions
      </NavLink>
      <NavLink>
        Products
      </NavLink>
      <NavLink>
        Resources
      </NavLink>
      <NavLink>
        About
      </NavLink>
    </NavLinks>
  ];
  return (
    <>
    <Container>
      <Header links={navLinks}/>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <SliderButton id="vyw0LRNz" style={{ padding: '10 0', fontSize: 14, outline: 'none' }} width={600} position="right">
                <PrimaryButton as="a" css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
              </SliderButton>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={HeroImage} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                  {/*<CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>*/}
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
