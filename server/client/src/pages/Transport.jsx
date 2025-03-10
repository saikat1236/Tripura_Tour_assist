import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiTruck, FiCar, FiSearch, FiMapPin } from 'react-icons/fi';
import Container from '../components/styled/Container';
import Section from '../components/styled/Section';
import Button from '../components/styled/Button';
import Card from '../components/styled/Card';

const PageHeader = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/transport-header.jpg') no-repeat center center/cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.huge};
  margin-bottom: 1rem;
`;

const PageDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const SearchContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  max-width: 800px;
  margin: 0 auto;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TransportCard = styled(Card)`
  padding: 2rem;
`;

const TransportIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const TransportTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 1rem;
`;

const TransportDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

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

const Transport = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transport in Tripura
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find information about public transport options, routes, timings, and fares for travel within and around Tripura.
          </PageDescription>
          
          <SearchContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SearchForm>
              <SearchInput type="text" placeholder="From" />
              <SearchInput type="text" placeholder="To" />
              <Button>
                <FiSearch /> Search
              </Button>
            </SearchForm>
          </SearchContainer>
        </Container>
      </PageHeader>
      
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <TransportGrid>
              <TransportCard as={motion.div} variants={fadeInUp}>
                <TransportIcon>
                  <FiMapPin />
                </TransportIcon>
                <TransportTitle>Bus Services</TransportTitle>
                <TransportDescription>
                  Information about local and intercity bus services, routes, timings, and fares. TRTC and private bus operators details.
                </TransportDescription>
                <Button as="a" href="#bus-services">View Details</Button>
              </TransportCard>
              
              <TransportCard as={motion.div} variants={fadeInUp}>
                <TransportIcon>
                  <FiCar />
                </TransportIcon>
                <TransportTitle>Taxi Services</TransportTitle>
                <TransportDescription>
                  Details about taxi services, app-based cabs, and car rentals available in major cities of Tripura.
                </TransportDescription>
                <Button as="a" href="#taxi-services">View Details</Button>
              </TransportCard>
              
              <TransportCard as={motion.div} variants={fadeInUp}>
                <TransportIcon>
                  <FiTruck />
                </TransportIcon>
                <TransportTitle>Other Transport</TransportTitle>
                <TransportDescription>
                  Information about auto-rickshaws, e-rickshaws, and other local transport options in Tripura.
                </TransportDescription>
                <Button as="a" href="#other-transport">View Details</Button>
              </TransportCard>
            </TransportGrid>
          </motion.div>
        </Container>
      </Section>
      
      {/* Additional sections for detailed transport information would go here */}
    </>
  );
};

export default Transport;