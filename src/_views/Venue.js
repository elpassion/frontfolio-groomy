import React from 'react';

import { Layout } from './Layout';
import VenueCover from '../components/VenueCover';

export const Venue = ({
  match: {
    params: { id },
  },
}) => (
  <Layout className='venue'>
    <VenueCover isHero displayId={parseInt(id)} />
  </Layout>
);

Venue.displayName = 'Venue';
