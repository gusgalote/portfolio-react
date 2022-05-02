import P from 'prop-types';
import { useContext, useState } from 'react';
import {
  FiChevronDown,
  FiGift,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from 'react-icons/fi';

import * as Styled from './Profile.styles';

import { Avatar, Heading, Badge } from '../';

const Profile = () => {
  const [showDetails, setShowDetails] = useState(true);

  const handleToggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <>
      <Styled.MainInfo>
        <Avatar
          srcImage="https://github.com/gusgalote.png"
          altText="gusgalote avatar"
        />
        <Styled.TextCenter>
          <Heading size="small">Gustavo Galote</Heading>
          <Badge>Web Developer</Badge>
        </Styled.TextCenter>
        <Styled.DetailsButton onClick={handleToggleDetails}>
          <FiChevronDown />
        </Styled.DetailsButton>
      </Styled.MainInfo>
      <Styled.DetailsInfo showDetails={showDetails}>
        <Styled.Separation />
        <Styled.DetailsList>
          <Styled.DetailsListItem>
            <Styled.IconSpan>
              <FiMail />
            </Styled.IconSpan>
            <div>
              <Styled.DetailTitle>Email</Styled.DetailTitle>
              <Styled.DetailContent>gusgalote@outlook.com</Styled.DetailContent>
            </div>
          </Styled.DetailsListItem>
          <Styled.DetailsListItem>
            <Styled.IconSpan>
              <FiGift />
            </Styled.IconSpan>
            <div>
              <Styled.DetailTitle>Birthday</Styled.DetailTitle>
              <Styled.DetailContent>January 15, 2004</Styled.DetailContent>
            </div>
          </Styled.DetailsListItem>
          <Styled.DetailsListItem>
            <Styled.IconSpan>
              <FiMapPin />
            </Styled.IconSpan>
            <div>
              <Styled.DetailTitle>Location</Styled.DetailTitle>
              <Styled.DetailContent>
                Aguas de Lindoia - SP, Brazil
              </Styled.DetailContent>
            </div>
          </Styled.DetailsListItem>
        </Styled.DetailsList>
        <Styled.Social>
          <Styled.SocialLink
            href="https://github.com/gusgalote"
            target="_blank"
          >
            <FiGithub />
          </Styled.SocialLink>
          <Styled.SocialLink
            href="https://twitter.com/gusgalote"
            target="_blank"
          >
            <FiTwitter />
          </Styled.SocialLink>
        </Styled.Social>
      </Styled.DetailsInfo>
    </>
  );
};

export { Profile };
