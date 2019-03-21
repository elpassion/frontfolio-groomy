import React from 'react';

import Layout from './Layout';
import VenueCover from '../components/VenueCover';

const Venue = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <Layout className='venue'>
      <VenueCover isHero displayId={parseInt(id)} />
    </Layout>
  );
};

export default Venue;
