import React from 'react';

import Layout from './Layout';
import PlaceCover from '../PlaceCover';

const Place = ({
  match: {
    params: { id },
  },
  ...props
}) => {
  return (
    <Layout classame='place'>
      <PlaceCover isHero displayId={parseInt(id)} />
      {id}
    </Layout>
  );
};

export default Place;
