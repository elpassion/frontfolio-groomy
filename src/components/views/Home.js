import React from 'react';

import Layout from './Layout';
import PrimaryHeading from '../Typography/PrimaryHeading';
import PlaceCover from '../PlaceCover';
import PlaceList from '../PlaceItems/PlaceList';

const Home = () => {
  return (
    <Layout pushContent>
      <PrimaryHeading>Featured salons</PrimaryHeading>

      <PlaceCover displayId={4} />

      <PlaceList />
    </Layout>
  );
};

export default Home;
