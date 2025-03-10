import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiDollarSign, FiStar, FiPhone, FiFilter } from 'react-icons/fi';
import Container from '../components/styled/Container';
import Section from '../components/styled/Section';
import Card from '../components/styled/Card';
import Button from '../components/styled/Button';

// Page Header
const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/restaurant-bg.jpg') no-repeat center center/cover;
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

// Filter Section
const FilterSection = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-top: -3rem;
  position: relative;
  z-index: 10;
  margin-bottom: 3rem;
`;

const FilterTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.
  const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FilterInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Cuisine Tags
const CuisineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const CuisineTag = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.lightGray};
  color: ${({ active, theme }) => 
    active ? theme.colors.white : theme.colors.text};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : theme.colors.lightGray}DD;
  }
`;

// Restaurant List
const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RestaurantCard = styled(Card)`
  overflow: hidden;
`;

const RestaurantImage = styled.div`
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
  
  ${RestaurantCard}:hover & img {
    transform: scale(1.1);
  }
`;

const RestaurantRating = styled.div`
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

const PriceCategory = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
`;

const RestaurantName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 0.5rem;
`;

const RestaurantLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.lightText};
  
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CuisineList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CuisineItem = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const RestaurantDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.lightText};
  
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const RestaurantActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
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

const Restaurants = () => {
  const [filters, setFilters] = useState({
    vegetarian: false,
    nonVegetarian: false,
    budget: false,
    luxury: false
  });
  
  const handleFilterChange = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter]
    });
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
            Restaurants in Tripura
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the best dining experiences in Tripura, from local cuisine to international flavors.
          </PageDescription>
          
          <SearchContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SearchForm>
              <SearchInput type="text" placeholder="Search restaurants..." />
              <SearchInput type="text" placeholder="Location" />
              <Button>
                <FiSearch /> Search
              </Button>
            </SearchForm>
          </SearchContainer>
        </Container>
      </PageHeader>
      
      <Section>
        <Container>
          <FilterSection>
            <h3 style={{ marginBottom: '1rem' }}>
              <FiFilter style={{ marginRight: '0.5rem' }} /> Filters
            </h3>
            <FilterGrid>
              <FilterItem>
                <input 
                  type="checkbox" 
                  id="vegetarian" 
                  checked={filters.vegetarian}
                  onChange={() => handleFilterChange('vegetarian')}
                />
                <label htmlFor="vegetarian">Vegetarian</label>
              </FilterItem>
              <FilterItem>
                <input 
                  type="checkbox" 
                  id="nonVegetarian" 
                  checked={filters.nonVegetarian}
                  onChange={() => handleFilterChange('nonVegetarian')}
                />
                <label htmlFor="nonVegetarian">Non-Vegetarian</label>
              </FilterItem>
              <FilterItem>
                <input 
                  type="checkbox" 
                  id="budget" 
                  checked={filters.budget}
                  onChange={() => handleFilterChange('budget')}
                />
                <label htmlFor="budget">Budget-Friendly</label>
              </FilterItem>
              <FilterItem>
                <input 
                  type="checkbox" 
                  id="luxury" 
                  checked={filters.luxury}
                  onChange={() => handleFilterChange('luxury')}
                />
                <label htmlFor="luxury">Fine Dining</label>
              </FilterItem>
            </FilterGrid>
          </FilterSection>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <RestaurantGrid>
              {/* Restaurant Card 1 */}
              <RestaurantCard as={motion.div} variants={fadeInUp}>
                <RestaurantImage>
                  <img src="/images/placeholder.jpg" alt="Restaurant" />
                </RestaurantImage>
                <RestaurantContent>
                  <RestaurantHeader>
                    <div>
                      <RestaurantTitle>Tripura Delights</RestaurantTitle>
                      <RestaurantLocation>
                        <FiMapPin /> Agartala, Tripura
                      </RestaurantLocation>
                    </div>
                    <RestaurantRating>
                      <FiStar /> 4.8
                    </RestaurantRating>
                  </RestaurantHeader>
                  <RestaurantDescription>
                    Authentic Tripuri cuisine with a modern twist. Enjoy local delicacies in a cozy atmosphere.
                  </RestaurantDescription>
                  <RestaurantFooter>
                    <RestaurantCuisine>Tripuri, Bengali</RestaurantCuisine>
                    <Button size="small">View Details</Button>
                  </RestaurantFooter>
                </RestaurantContent>
              </RestaurantCard>
              
              {/* Restaurant Card 2 */}
              <RestaurantCard as={motion.div} variants={fadeInUp}>
                <RestaurantImage>
                  <img src="/images/placeholder.jpg" alt="Restaurant" />
                </RestaurantImage>
                <RestaurantContent>
                  <RestaurantHeader>
                    <div>
                      <RestaurantTitle>Spice Garden</RestaurantTitle>
                      <RestaurantLocation>
                        <FiMapPin /> Dharmanagar, Tripura
                      </RestaurantLocation>
                    </div>
                    <RestaurantRating>
                      <FiStar /> 4.5
                    </RestaurantRating>
                  </RestaurantHeader>
                  <RestaurantDescription>
                    Multi-cuisine restaurant offering a variety of Indian, Chinese, and Continental dishes.
                  </RestaurantDescription>
                  <RestaurantFooter>
                    <RestaurantCuisine>Multi-cuisine</RestaurantCuisine>
                    <Button size="small">View Details</Button>
                  </RestaurantFooter>
                </RestaurantContent>
              </RestaurantCard>
              
              {/* Restaurant Card 3 */}
              <RestaurantCard as={motion.div} variants={fadeInUp}>
                <RestaurantImage>
                  <img src="/images/placeholder.jpg" alt="Restaurant" />
                </RestaurantImage>
                <RestaurantContent>
                  <RestaurantHeader>
                    <div>
                      <RestaurantTitle>Royal Feast</RestaurantTitle>
                      <RestaurantLocation>
                        <FiMapPin /> Udaipur, Tripura
                      </RestaurantLocation>
                    </div>
                    <RestaurantRating>
                      <FiStar /> 4.7
                    </RestaurantRating>
                  </RestaurantHeader>
                  <RestaurantDescription>
                    Fine dining restaurant specializing in royal Tripuri and Bengali cuisine with a luxurious ambiance.
                  </RestaurantDescription>
                  <RestaurantFooter>
                    <RestaurantCuisine>Tripuri, Bengali</RestaurantCuisine>
                    <Button size="small">View Details</Button>
                  </RestaurantFooter>
                </RestaurantContent>
              </RestaurantCard>
            </RestaurantGrid>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default Restaurants;