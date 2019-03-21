import React from 'react';

import Layout from './Layout';
import PrimaryHeading from '../components/_typography/PrimaryHeading';
import VenueCover from '../components/VenueCover';
import VenueList from '../components/VenueList';

const Home = () => {
  return (
    <Layout className='home' pushContent>
      <PrimaryHeading>Featured salons</PrimaryHeading>
      <VenueCover displayId={4} />
      <VenueList />
    </Layout>
  );
};

Home.displayName = 'Home';
export default Home;
