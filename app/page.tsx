import React from 'react';
import Hero from "./(components)/Sections/Hero";
// import Trusted from './(components)/Sections/Trusted';
import Testimonials from './(components)/Sections/Testimonials';
import { fetchLocalTestimonialsByIds } from "./utils/data";
import EntryTests from './(components)/Sections/EntryTests';
import Trusted from './(components)/Sections/Trusted';
import DashboardDisplay from './(components)/Sections/DashboardDisplay';
import OurStory from './(components)/Sections/OurStory';
const Home: React.FC = () => {
  const formattedData = fetchLocalTestimonialsByIds();
  return (
    <>
    <div className='overflow-x-hidden'>
      <Hero />
      <EntryTests />
      <Trusted />
      <DashboardDisplay />
      <Testimonials testimonialsData={formattedData}/>
      <OurStory />
    </div>
    </>
  );
};

export default Home;
