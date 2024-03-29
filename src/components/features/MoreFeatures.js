import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-8.svg";
import { SliderButton } from "@typeform/embed-react";

// const Container = tw.div`relative -mx-8`;
const Container = tw(ContainerBase)`bg-designs1 -mx-8 p-8`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

// const DecoratorBlob = tw(
//   SvgDotPattern
// )`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
// const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;

const Subheading = tw(SubheadingBase)`text-center text-green-300 md:text-center`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-center text-3xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${props => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;
const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-5 transform translate-x-16 translate-y-10`}
`;

const DecoratorsBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute left-0 top-0 w-64 opacity-5 transform translate-x-1 translate-y-0`}
`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-12 text-sm inline-block text-center mx-auto md:mx-auto`,
  props.buttonRounded && tw`rounded-full`
]);

export default ({
  subheading = "Build With Us",
  heading = (
    <>
      Help us build the future <p tw="text-green-500">Join us!</p> 
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Be Part of our journey",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = false,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Professionalism",
      description: "We have the best professional marketing people across the globe just to work with you.",
      iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
      Icon: MoneyIcon,
      title: "Affordable",
      description: "We promise to offer you the best rate we can - at par with the industry standard.",
      iconContainerCss: tw`bg-red-300 text-red-800`
    }
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container id='build'>
      <ContentWithPaddingXl>
      <DecoratorsBlob />
      <DecoratorBlob />
        {/*<ImageColumn>
          <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>*/}
            <Subheading>{subheading}</Subheading>
            <Heading>
              {heading}
              <SliderButton id="vyw0LRNz" style={{ padding: 10, fontSize: 14, outline: 'none', display: 'inline', width: '0px auto' }} width={600} position="right">
          <PrimaryButton as="a" css={buttonRoundedCss}>
            {primaryButtonText}
          </PrimaryButton>
        </SliderButton>
            </Heading>
            {/*<Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}
                    >
                      {<feature.Icon />}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>

            {/*<PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
              </PrimaryButton>
            <SubscribeForm method="get" action="#">
              <Input type="email" placeholder="Your Email Address" />
              <SubscribeButton type="submit">Get&nbsp;Early&nbsp;Access</SubscribeButton>
              </SubscribeForm>*/}
        
      </ContentWithPaddingXl>
    </Container>
  );
};
