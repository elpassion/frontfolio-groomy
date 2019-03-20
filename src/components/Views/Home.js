import React from 'react';

import Layout from './Layout';
import PrimaryHeading from '../Typography/PrimaryHeading';
import VenueCover from '../VenueCover';
import PlaceList from '../VenueList';

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
