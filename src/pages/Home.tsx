import React, { useState } from 'react';
import Hero from '../components/Hero';
import FilterSection from '../components/FilterSection';
import PropertiesSection from '../components/PropertiesSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <Hero />
      <FilterSection onFilterChange={handleFilterChange} />
      <PropertiesSection activeFilter={activeFilter} />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;