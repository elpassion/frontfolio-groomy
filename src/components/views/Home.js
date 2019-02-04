import React from 'react';

import Layout from './Layout';
import Button from '../Button/Button';

const Home = () => {
  return (
    <Layout pushContent>
      <Button href='/places/4'>
        Some Button
      </Button>
    </Layout>
  );
};

export default Home;
