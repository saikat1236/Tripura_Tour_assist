import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ size }) => 
    size === 'large' ? '0.75rem 1.5rem' : 
    size === 'small' ? '0.4rem 0.75rem' : 
    '0.6rem 1.25rem'};
  font-size: ${({ size, theme }) => 
    size === 'large' ? theme.fontSizes.large : 
    size === 'small' ? theme.fontSizes.small : 
    theme.fontSizes.medium};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.short};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  ${({ variant, theme }) => 
    variant === 'outlined' ? css`
      background-color: transparent;
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    ` : css`
      background-color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.white};
      
      &:hover {
        background-color: ${theme.colors.secondary};
        border-color: ${theme.colors.secondary};
      }
    `}
    
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;