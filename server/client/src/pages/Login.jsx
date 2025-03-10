import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiLogIn, FiFacebook, FiTwitter, FiGithub } from 'react-icons/fi';
import Container from '../components/styled/Container';
import Button from '../components/styled/Button';

const LoginSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: ${({ theme }) => theme.shadows.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const LoginImage = styled.div`
  background: linear-gradient(rgba(67, 97, 238, 0.8), rgba(58, 12, 163, 0.8)),
    url('/images/login-bg.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const LoginImageTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1rem;
`;

const LoginImageText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  max-width: 400px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const LoginForm = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1.5rem;
  }
`;

const LoginTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const LoginSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const InputGroup = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ForgotPassword = styled(Link)`
  display: block;
  text-align: right;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  span {
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const RegisterPrompt = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log('Login submitted', { email, password });
    // Redirect to home after successful login
    navigate('/');
  };
  
  return (
    <LoginSection>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <LoginContainer>
            <LoginImage>
              <LoginImageTitle>Welcome Back!</LoginImageTitle>
              <LoginImageText>
                Log in to access your personalized travel recommendations, saved itineraries, and more.
              </LoginImageText>
              <img 
                src="/images/login-illustration.svg" 
                alt="Login" 
                style={{ maxWidth: '80%', maxHeight: '300px' }}
              />
            </LoginImage>
            
            <LoginForm>
              <LoginTitle>Login</LoginTitle>
              <LoginSubtitle>Please sign in to continue</LoginSubtitle>
              
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel>Email Address</FormLabel>
                  <InputGroup>
                    <FiMail />
                    <FormInput 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <FiLock />
                    <FormInput 
                      type="password" 
                      placeholder="Enter your password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                
                <ForgotPassword to="/forgot-password">Forgot Password?</ForgotPassword>
                
                <Button type="submit" fullWidth>
                  <FiLogIn /> Login
                </Button>
              </form>
              
              <OrDivider>
                <span>OR</span>
              </OrDivider>
              
              <SocialLogin>
                <SocialButton color="primary">
                  <FiFacebook />
                </SocialButton>
                <SocialButton color="info">
                  <FiTwitter />
                </SocialButton>
                <SocialButton color="darkGray">
                  <FiGithub />
                </SocialButton>
              </SocialLogin>
              
              <RegisterPrompt>
                Don't have an account? <Link to="/register">Register</Link>
              </RegisterPrompt>
            </LoginForm>
          </LoginContainer>
        </motion.div>
      </Container>
    </LoginSection>
  );
};

export default Login;