import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import TelemedicineImage from "images/image5.png";
import consultationImage from "images/image4.png";
import MonitoringImage from "images/image3.png";
import RemoteImage from "images/image6.png";
import RecordsImage from "images/image8.png";
import HealthImage from "images/image9.png";
import ShieldIconImage from "images/shield-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import SpecialistImage from "../../images/specialist.png";
import MedicalRecordImage from "../../images/medical-record.png";
import HealthMonitoringImage from "../../images/heart-rate.png";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3 text-green-300`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`} // mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto
`;
const Column = styled.div`
  ${tw`lg:w-1/2 `} //max-w-xs
`;

const Card = styled.a`
  ${tw`flex flex-row items-start text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`} //flex flex-row items-center text-center h-full mx-4 px-4 py-8 rounded
  .imageContainer {
    ${tw`text-center rounded-full`} //bg-gray-100
    img {
      ${tw`max-w-full text-green-500 pl-4`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-gray-600 leading-none hover:text-green-600 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
  cards = [
    {
      imageSrc: TelemedicineImage,
      title: "Telemedical services",
      description: "Access to healthcare services directly from your phone",
      url: "https://timerse.com"
    },
    {
      imageSrc: consultationImage,
      title: "Scheduling Medical consultations",
      description: "Easily fix appointments with specialists and recieve reminders",
      url: "https://google.com"
    },
    {
      imageSrc: MonitoringImage,
      title: "Personalized health monitoring",
      description: "Monitor health indices without stepping into a hospital",
      url: "https://reddit.com"
    },
    {
      imageSrc: RemoteImage,
      title: "Remote health service delivery",
      description: "First aid, lab sample collection and delivery results, and other Health care services brought to you at your home, office, school,..etc at your convenience",
      url: "https://reddit.com"
    },
    {
      imageSrc: RecordsImage,
      title: "Medical records keeping",
      description: "Have your medical records on the go",
      url: "https://reddit.com"
    },
    {
      imageSrc: HealthImage,
      title: "Access to over 100+ healthcare specialists across all medical fields",
      description: "Quality services from our ever growing list of medical professionals at anytime",
      url: "https://reddit.com"
    },
  ],
  linkText = "Learn More",
  heading = "Our Services",
  subheading = "Features",
  description = "Our impressive range of services includes",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        {/*subheading && <Subheading>{subheading}</Subheading>*/}
        {heading && <Heading>{heading}</Heading>}
        {/*description && <Description>{description}</Description>*/}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
              <div style={{width: '398px'}}>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </div>
              <span className="imageContainer" css={imageContainerCss}>
                <img src={card.imageSrc} alt="" css={imageCss} />
              </span>
                {/*linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )*/}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
