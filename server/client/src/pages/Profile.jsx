import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../components/styled/Container';
import Section from '../components/styled/Section';
import Button from '../components/styled/Button';

const ProfileHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 3rem 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 2rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: 0.5rem;
`;

const ProfileEmail = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 1rem;
`;

const ProfileActions = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FavoriteItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FavoriteImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FavoriteInfo = styled.div`
  flex: 1;
`;

const FavoriteName = styled.h4`
  margin-bottom: 0.25rem;
`;

const FavoriteCategory = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.lightText};
`;

const Profile = () => {
  return (
    <>
      <ProfileHeader>
        <Container>
          <ProfileInfo>
            <ProfileImage>
              <img src="/images/profile-placeholder.jpg" alt="Profile" />
            </ProfileImage>
            <ProfileDetails>
              <ProfileName>John Doe</ProfileName>
              <ProfileEmail>john.doe@example.com</ProfileEmail>
              <ProfileActions>
                <Button>Edit Profile</Button>
                <Button variant="outlined">Change Password</Button>
              </ProfileActions>
            </ProfileDetails>
          </ProfileInfo>
        </Container>
      </ProfileHeader>
      
      <Section>
        <Container>
          <ProfileContainer>
            <ProfileCard>
              <SectionTitle>My Favorites</SectionTitle>
              <FavoritesList>
                <FavoriteItem>
                  <FavoriteImage>
                    <img src="/images/placeholder.jpg" alt="Tourist Spot" />
                  </FavoriteImage>
                  <FavoriteInfo>
                    <FavoriteName>Neermahal Palace</FavoriteName>
                    <FavoriteCategory>Tourist Spot</FavoriteCategory>
                  </FavoriteInfo>
                </FavoriteItem>
                <FavoriteItem>
                  <FavoriteImage>
                    <img src="/images/placeholder.jpg" alt="Restaurant" />
                  </FavoriteImage>
                  <FavoriteInfo>
                    <FavoriteName>Tripura Restaurant</FavoriteName>
                    <FavoriteCategory>Restaurant</FavoriteCategory>
                  </FavoriteInfo>
                </FavoriteItem>
                <FavoriteItem>
                  <FavoriteImage>
                    <img src="/images/placeholder.jpg" alt="Tourist Spot" />
                  </FavoriteImage>
                  <FavoriteInfo>
                    <FavoriteName>Ujjayanta Palace</FavoriteName>
                    <FavoriteCategory>Tourist Spot</FavoriteCategory>
                  </FavoriteInfo>
                </FavoriteItem>
              </FavoritesList>
            </ProfileCard>
            
            <ProfileCard>
              <SectionTitle>Recent Activities</SectionTitle>
              <p>No recent activities to display.</p>
            </ProfileCard>
          </ProfileContainer>
        </Container>
      </Section>
    </>
  );
};

export default Profile;