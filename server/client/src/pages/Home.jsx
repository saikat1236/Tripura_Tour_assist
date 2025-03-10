import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiCoffee, FiPhone } from 'react-icons/fi';
import Container from '../components/styled/Container';
import Section from '../components/styled/Section';
import Button from '../components/styled/Button';
import Card from '../components/styled/Card';

// Hero Section
const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/tripura-hero.jpg') no-repeat center center/cover;
  color: white;
  padding: 2rem 0;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

// Services Section
const ServicesGrid = styled.div`
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

const ServiceCard = styled(Card)`
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  
  svg {
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  ${ServiceCard}:hover & svg {
    transform: scale(1.2);
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`;

// About Section
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 400px;
  }
`;

const AboutContent = styled.div``;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const AboutText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const FeatureList = styled(motion.ul)`
  margin-bottom: 2rem;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 1rem;
  }
`;

// CTA Section
const CTASection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/images/cta-bg.jpg') no-repeat center center/cover;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 6rem 0;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1.5rem;
`;

const CTAText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Discover Tripura with <span>TravelAssist</span>
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your all-in-one platform for local transport, tourism, and food recommendations
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button as={Link} to="/transport" size="large">
                Explore Transport
              </Button>
              <Button as={Link} to="/tourism" variant="outlined" size="large">
                Discover Places
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <Section
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <Container>
          <motion.div
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <SectionTitle>Our Services</SectionTitle>
            <AboutText style={{ maxWidth: '700px', margin: '0 auto' }}>
              TravelAssist provides comprehensive travel information and assistance to make your journey in Tripura smooth and enjoyable.
            </AboutText>
          </motion.div>

          <ServicesGrid>
            <ServiceCard as={motion.div} variants={fadeInUp}>
              <ServiceIcon>
                <FiBus />
              </ServiceIcon>
              <ServiceTitle>Transport Assistance</ServiceTitle>
              <ServiceDescription>
                Get detailed information about public transport routes, timings, and fares for intercity and outside city travel.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard as={motion.div} variants={fadeInUp}>
              <ServiceIcon>
                <FiMapPin />
              </ServiceIcon>
              <ServiceTitle>Tourism Guidance</ServiceTitle>
              <ServiceDescription>
                Discover tourist attractions like Neermahal, Jampui Hills, and Matabari with public transport details.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard as={motion.div} variants={fadeInUp}>
              <ServiceIcon>
                <FiCoffee />
              </ServiceIcon>
              <ServiceTitle>Restaurant Guide</ServiceTitle>
              <ServiceDescription>
                Find local eateries with cuisine preferences, user ratings, reviews, and cost estimation.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard as={motion.div} variants={fadeInUp}>
              <ServiceIcon>
                <FiPhone />
              </ServiceIcon>
              <ServiceTitle>Emergency Services</ServiceTitle>
              <ServiceDescription>
                Quick access to emergency services like hospitals, police stations, and ATMs during your travel.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </Section>

      <Section
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Container>
          <AboutContainer>
            <AboutImage
              as={motion.div}
              variants={fadeInUp}
            >
              <img src="/images/about-img.jpg" alt="Tripura Tourism" />
            </AboutImage>

            <AboutContent>
              <SectionTitle
                as={motion.h2}
                variants={fadeInUp}
              >
                Why Choose TravelAssist?
              </SectionTitle>
              
              <AboutText
                as={motion.p}
                variants={fadeInUp}
              >
                TravelAssist is designed to solve the common problems faced by travelers in Tripura. We provide structured information about local transport, tourist spots, and restaurants all in one place.
              </AboutText>
              
              <FeatureList
                as={motion.ul}
                variants={staggerContainer}
              >
                <FeatureItem as={motion.li} variants={fadeInUp}>
                  <FiBus /> Comprehensive public transport information
                </FeatureItem>
                <FeatureItem as={motion.li} variants={fadeInUp}>
                  <FiMapPin /> Detailed tourist spot guides with transport options
                </FeatureItem>
                <FeatureItem as={motion.li} variants={fadeInUp}>
                  <FiCoffee /> Local restaurant recommendations with reviews
                </FeatureItem>
                <FeatureItem as={motion.li} variants={fadeInUp}>
                  <FiPhone /> Emergency service locations for safety
                </FeatureItem>
              </FeatureList>
              
              <motion.div variants={fadeInUp}>
                <Button as={Link} to="/about">
                  Learn More About Us
                </Button>
              </motion.div>
            </AboutContent>
          </AboutContainer>
        </Container>
      </Section>

      <CTASection
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Container>
          <CTATitle
            as={motion.h2}
            variants={fadeInUp}
          >
            Ready to Explore Tripura?
          </CTATitle>
          
          <CTAText
            as={motion.p}
            variants={fadeInUp}
          >
            Start your journey with TravelAssist and discover the beauty of Tripura with ease. Get all the information you need in one place.
          </CTAText>
          
          <motion.div variants={fadeInUp}>
            <Button as={Link} to="/register" size="large">
              Get Started Now
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </>
  );
};

export default Home;