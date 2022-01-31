import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/logo.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-31.svg";

const Container = tw.div`relative text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-around -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute left-0 bottom-0 w-72 opacity-25 transform translate-x-1 translate-y-64 mr-80`}
`;

const TopDecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 top-0 w-72 h-64 opacity-25 transform translate-x-24 translate-y-64`}
`;


const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container style={{backgroundColor: '#F5FFFF'}}>
      <Content>
        <SixColumns style={{textAlign: 'center'}}>
          <Column>
            <ColumnHeading>Our Solutions</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">For providers</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">For Patients</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">For Partners</Link>
              </LinkListItem>
              {/*<LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>*/}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Our Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Remote Health service delivery</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Personalized Health Monitoring</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Telemedicine services</Link>
              </LinkListItem>
              {/*<LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>*/}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Company</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">About</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem>
              {/*<LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>*/}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">25 Bentlane Viva Estate, Enugu, Nigeria.</Link>
              </LinkListItem>
              <LinkListItem>
                <SocialLinksContainer>
                  <SocialLink style={{margin: 'auto', backgroundColor: '#1DA1F2'}} href="https://twitter.com">
                    <TwitterIcon />
                  </SocialLink>
                </SocialLinksContainer>
              </LinkListItem>
            </LinkList>
          </Column>
          {/*<SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We deliver high quality blog posts written by professionals weekly. And we promise no spam.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>*/}
        </SixColumns>
        {/*<Divider />*/}
        
        <ThreeColRow style={{margin: '8rem 0rem 0rem 0rem'}}>
          {/*<LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>CareHive</LogoText>
          </LogoContainer>*/}
          <CopywrightNotice style={{margin: 'auto'}}>&copy; 2022 CareHive Africa. All Rights Reserved.</CopywrightNotice>
          {/*<SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>*/}
        </ThreeColRow>
      </Content>
      <DecoratorBlob/>
      <TopDecoratorBlob/>
    </Container>
  );
};
