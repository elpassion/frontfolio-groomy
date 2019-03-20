import React from 'react';

import Layout from './Layout';
import PlaceCover from '../PlaceCover';

const Place = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <Layout className='place'>
      <PlaceCover isHero displayId={parseInt(id)} />
    </Layout>
  );
};

export default Place;
