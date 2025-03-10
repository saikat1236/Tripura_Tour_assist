import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiPhone, FiUserPlus, FiFacebook, FiTwitter, FiGithub } from 'react-icons/fi';
import Container from '../components/styled/Container';
import Button from '../components/styled/Button';

const RegisterSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: ${({ theme }) => theme.shadows.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const RegisterImage = styled.div`
  background: linear-gradient(rgba(247, 37, 133, 0.8), rgba(58, 12, 163, 0.8)),
    url('/images/register-bg.jpg') no-repeat center center/cover;
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

const RegisterImageTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1rem;
`;

const RegisterImageText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  max-width: 400px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const RegisterForm = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1.5rem;
  }
`;

const RegisterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const RegisterSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
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

const TermsCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  input {
    margin-right: 0.5rem;
  }
  
  label {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
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

const LoginPrompt = styled.p`
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

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle registration
    console.log('Registration submitted', formData);
    // Redirect to login after successful registration
    navigate('/login');
  };
  
  return (
    <RegisterSection>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <RegisterContainer>
            <RegisterImage>
              <RegisterImageTitle>Join TravelAssist</RegisterImageTitle>
              <RegisterImageText>
                Create an account to get personalized travel recommendations, save your favorite places, and plan your perfect trip to Tripura.
              </RegisterImageText>
              <img 
                src="/images/register-illustration.svg" 
                alt="Register" 
                style={{ maxWidth: '80%', maxHeight: '300px' }}
              />
            </RegisterImage>
            
            <RegisterForm>
              <RegisterTitle>Create Account</RegisterTitle>
              <RegisterSubtitle>Please fill in the form to register</RegisterSubtitle>
              
              <form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <InputGroup>
                      <FiUser />
                      <FormInput 
                        type="text" 
                        name="firstName"
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <InputGroup>
                      <FiUser />
                      <FormInput 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </FormGrid>
                
                <FormGroup>
                  <FormLabel>Email Address</FormLabel>
                  <InputGroup>
                    <FiMail />
                    <FormInput 
                      type="email" 
                      name="email"
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup>
                    <FiPhone />
                    <FormInput 
                      type="tel" 
                      name="phone"
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGrid>
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <FiLock />
                      <FormInput 
                        type="password" 
                        name="password"
                        placeholder="Create password" 
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <FiLock />
                      <FormInput 
                        type="password" 
                        name="confirmPassword"
                        placeholder="Confirm password" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </FormGrid>
                
                <TermsCheckbox>
                  <input 
                    type="checkbox" 
                    id="agreeTerms" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="agreeTerms">
                    I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </TermsCheckbox>
                
                <Button type="submit" fullWidth>
                  <FiUserPlus /> Register
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
              
              <LoginPrompt>
                Already have an account? <Link to="/login">Login</Link>
              </LoginPrompt>
            </RegisterForm>
          </RegisterContainer>
        </motion.div>
      </Container>
    </RegisterSection>
  );
};

export default Register;