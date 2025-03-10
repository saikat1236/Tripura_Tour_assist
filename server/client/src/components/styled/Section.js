import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  padding: 80px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

export default Section;