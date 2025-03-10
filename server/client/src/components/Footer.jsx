import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Container from './styled/Container';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.lightText};
  transition: color ${({ theme }) => theme.transitions.short};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 0.75rem;
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.lightText};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo to="/">
              Travel<span>Assist</span>
            </FooterLogo>
            <FooterDescription>
              Your all-in-one platform for local travel information, transport assistance, 
              tourism guidance, and restaurant recommendations in Tripura.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/transport">Transport</FooterLink>
              <FooterLink to="/tourism">Tourism</FooterLink>
              <FooterLink to="/restaurants">Restaurants</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink to="/transport">Intercity Transport</FooterLink>
              <FooterLink to="/transport">Outside City Transport</FooterLink>
              <FooterLink to="/tourism">Tourist Spots</FooterLink>
              <FooterLink to="/restaurants">Local Food Guide</FooterLink>
              <FooterLink to="/emergency">Emergency Services</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactItem>
              <FiMapPin />
              <span>123 Main Street, Agartala, Tripura</span>
            </ContactItem>
            <ContactItem>
              <FiMail />
              <span>info@travelassist.com</span>
            </ContactItem>
            <ContactItem>
              <FiPhone />
              <span>+91 1234567890</span>
            </ContactItem>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          &copy; {new Date().getFullYear()} TravelAssist. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;