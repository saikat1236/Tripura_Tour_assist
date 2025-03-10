import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../components/styled/Container';
import Button from '../components/styled/Button';

const NotFoundSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
`;

const NotFoundContent = styled.div`
  max-width: 600px;
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 6rem;
  }
`;

const NotFoundSubtitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1.5rem;
`;

const NotFoundText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const NotFoundButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const NotFound = () => {
  return (
    <NotFoundSection>
      <Container>
        <NotFoundContent>
          <NotFoundTitle
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            404
          </NotFoundTitle>
          
          <NotFoundSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Page Not Found
          </NotFoundSubtitle>
          
          <NotFoundText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </NotFoundText>
          
          <NotFoundButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button as={Link} to="/">
              Back to Home
            </Button>
            <Button as={Link} to="/contact" variant="outlined">
              Contact Support
            </Button>
          </NotFoundButtons>
        </NotFoundContent>
      </Container>
    </NotFoundSection>
  );
};

export default NotFound;