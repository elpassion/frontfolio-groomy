import React from 'react';

import Layout from './Layout';
import PrimaryHeading from '../components/_typography/PrimaryHeading';
import VenueCover from '../components/VenueCover';
import PlaceList from '../components/VenueList';

const Home = () => {
  return (
    <Layout className='home' pushContent>
      <PrimaryHeading>Featured salons</PrimaryHeading>
      <VenueCover displayId={4} />
      <PlaceList />
    </Layout>
  );
};

export default Home;
