import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 1.5rem;
  transition: transform ${({ theme }) => theme.transitions.short};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export default Card;