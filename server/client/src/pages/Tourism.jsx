import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiDollarSign, FiStar, FiBus, FiInfo } from 'react-icons/fi';
import Container from '../components/styled/Container';
import Section from '../components/styled/Section';
import Card from '../components/styled/Card';
import Button from '../components/styled/Button';

// Page Header
const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/tourism-bg.jpg') no-repeat center center/cover;
  color: ${({ theme }) => theme.colors.white};
  padding: 8rem 0 4rem;
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.huge};
  margin-bottom: 1rem;
`;

const PageDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

// Search Form
const SearchForm = styled(motion.form)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-top: -3rem;
  position: relative;
  z-index: 10;
`;

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Tourist Spots List
const SpotsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SpotCard = styled(Card)`
  overflow: hidden;
`;

const SpotImage = styled.div`
  height: 200px;
  overflow: hidden;
  margin: -1.5rem -1.5rem 1.5rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  ${SpotCard}:hover & img {
    transform: scale(1.1);
  }
`;

const SpotRating = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SpotName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 0.5rem;
`;

const SpotLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.lightText};
  
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SpotDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SpotDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.lightText};
  
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SpotActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

// Featured Spot
const FeaturedSpot = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 4rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeaturedTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FeaturedDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin: 1.5rem 0;
  line-height: 1.8;
`;

const TransportOptions = styled.div`
  margin-top: 1.5rem;
`;

const TransportOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Animation variants
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

const Tourism = () => {
  const [spots, setSpots] = useState([]);
  const [featuredSpot, setFeaturedSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const mockData = [
      {
        id: 1,
        name: 'Neermahal Palace',
        location: 'Melaghar, Tripura',
        description: 'Neermahal is a former royal palace built by Maharaja Bir Bikram Kishore Manikya Bahadur of the Kingdom of Tripura. It is situated in the middle of Rudrasagar Lake and serves as a popular tourist attraction.',
        images: ['/images/neermahal.jpg'],
        openingHours: {
          open: '9:00 AM',
          close: '5:00 PM',
          holidays: ['Monday']
        },
        entryFee: 50,
        ratings: 4.7,
        transportOptions: [
          {
            type: 'bus',
            description: 'Regular buses from Agartala to Melaghar',
            fare: 40
          },
          {
            type: 'cab',
            description: 'Taxi service from Agartala',
            fare: 800
          }
        ]
      },
      {
        id: 2,
        name: 'Jampui Hills',
        location: 'North Tripura',
        description: 'Jampui Hills is a hill range in North Tripura, famous for its scenic beauty, orange orchards, and panoramic views. It is the highest hill range in Tripura and offers a pleasant climate throughout the year.',
        images: ['/images/jampui.jpg'],
        openingHours: {
          open: 'Open 24 hours',
          close: '',
          holidays: []
        },
        entryFee: 0,
        ratings: 4.5,
        transportOptions: [
          {
            type: 'bus',
            description: 'Daily bus service from Agartala to Kailashahar, then local transport',
            fare: 150
          },
          {
            type: 'cab',
            description: 'Direct taxi service from Agartala (full day)',
            fare: 3500
          }
        ]
      },
      {
        id: 3,
        name: 'Tripura Sundari Temple',
        location: 'Udaipur, Tripura',
        description: 'Tripura Sundari Temple, also known as Matabari, is one of the 51 Shakti Peethas and one of the holiest Hindu shrines in India. It is dedicated to Goddess Tripura Sundari, an incarnation of Goddess Parvati.',
        images: ['/images/matabari.jpg'],
        openingHours: {
          open: '6:00 AM',
          close: '8:00 PM',
          holidays: []
        },
        entryFee: 0,
        ratings: 4.8,
        transportOptions: [
          {
            type: 'bus',
            description: 'Regular buses from Agartala to Udaipur',
            fare: 60
          },
          {
            type: 'train',
            description: 'Train from Agartala to Udaipur',
            fare: 45
          }
        ]
      },
      {
        id: 4,
        name: 'Ujjayanta Palace',
        location: 'Agartala, Tripura',
        description: 'Ujjayanta Palace is a former royal palace in Agartala, which now houses the Tripura State Museum. It was built by Maharaja Radha Kishore Manikya in 1901 and features Indo-Saracenic architecture.',
        images: ['/images/ujjayanta.jpg'],
        openingHours: {
          open: '10:00 AM',
          close: '5:00 PM',
          holidays: ['Monday']
        },
        entryFee: 30,
        ratings: 4.6,
        transportOptions: [
          {
            type: 'bus',
            description: 'City buses within Agartala',
            fare: 15
          },
          {
            type: 'cab',
            description: 'Auto-rickshaws and taxis within the city',
            fare: 100
          }
        ]
      },
      {
        id: 5,
        name: 'Sepahijala Wildlife Sanctuary',
        location: 'Sepahijala District, Tripura',
        description: 'Sepahijala Wildlife Sanctuary is a wildlife sanctuary and botanical garden that houses various species of primates, birds, and reptiles. It is known for its clouded leopard breeding program.',
        images: ['/images/sepahijala.jpg'],
        openingHours: {
          open: '9:00 AM',
          close: '5:00 PM',
          holidays: ['Tuesday']
        },
        entryFee: 25,
        ratings: 4.3,
        transportOptions: [
          {
            type: 'bus',
            description: 'Buses from Agartala to Sepahijala',
            fare: 30
          },
          {
            type: 'cab',
            description: 'Taxi service from Agartala',
            fare: 600
          }
        ]
      },
      {
        id: 6,
        name: 'Unakoti',
        location: 'Unakoti District, Tripura',
        description: 'Unakoti is an ancient Shaivite place with rock carvings and stone images of Lord Shiva. The site dates back to the 7th-9th centuries and features massive rock-cut sculptures.',
        images: ['/images/unakoti.jpg'],
        openingHours: {
          open: '8:00 AM',
          close: '6:00 PM',
          holidays: []
        },
        entryFee: 15,
        ratings: 4.7,
        transportOptions: [
          {
            type: 'bus',
            description: 'Buses from Agartala to Kailashahar, then local transport',
            fare: 120
          },
          {
            type: 'cab',
            description: 'Direct taxi service from Agartala',
            fare: 2500
          }
        ]
      }
    ];
    
    setTimeout(() => {
      setSpots(mockData);
      setFeaturedSpot(mockData[0]); // Set Neermahal as featured spot
      setLoading(false);
    }, 1000);
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would trigger an API call with the search parameters
    console.log('Search submitted');
  };
  
  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tourism Guidance
          </PageTitle>
          <PageDescription