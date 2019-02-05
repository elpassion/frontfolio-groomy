import React from 'react';

import Layout from './Layout';
import PrimaryHeading from '../Typography/PrimaryHeading';
import PlaceCover from '../PlaceCover';

const Home = () => {
  return (
    <Layout pushContent>
      <PrimaryHeading>Featured salons</PrimaryHeading>

      <PlaceCover displayId={4} />
    </Layout>
  );
};

export default Home;
