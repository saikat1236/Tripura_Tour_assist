import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.short};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'outlined':
        return css`
          background-color: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.secondary}DD;
            transform: translateY(-2px);
          }
        `;
      case 'accent':
        return css`
          background-color: ${theme.colors.accent};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.accent}DD;
            transform: translateY(-2px);
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.primary}DD;
            transform: translateY(-2px);
          }
        `;
    }
  }}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

export default Button;