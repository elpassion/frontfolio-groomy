import React from 'react';

import Layout from './Layout';
import Button from '../Button/Button';
import PrimaryHeading from '../Typography/PrimaryHeading';

const Home = () => {
  return (
    <Layout pushContent>
      <PrimaryHeading>
        Featured salons
      </PrimaryHeading>

      <Button href='/places/4'>
        Some Button
      </Button>
    </Layout>
  );
};

export default Home;
