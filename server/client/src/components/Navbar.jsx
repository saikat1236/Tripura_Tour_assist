import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    padding: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: 500;
  color: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : theme.colors.text};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.short};
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0.5rem 0;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
`;

const AuthButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:first-child {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  
  &:last-child {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0;
    
    &:first-child {
      margin-right: 0;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/">
          Travel<span>Assist</span>
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavLink 
            to="/" 
            isActive={location.pathname === '/'}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/transport" 
            isActive={location.pathname === '/transport'}
            onClick={() => setIsOpen(false)}
          >
            Transport
          </NavLink>
          <NavLink 
            to="/tourism" 
            isActive={location.pathname === '/tourism'}
            onClick={() => setIsOpen(false)}
          >
            Tourism
          </NavLink>
          <NavLink 
            to="/restaurants" 
            isActive={location.pathname === '/restaurants'}
            onClick={() => setIsOpen(false)}
          >
            Restaurants
          </NavLink>
          
          <AuthButtons>
            <AuthButton to="/login" onClick={() => setIsOpen(false)}>
              Login
            </AuthButton>
            <AuthButton to="/register" onClick={() => setIsOpen(false)}>
              Register
            </AuthButton>
          </AuthButtons>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;