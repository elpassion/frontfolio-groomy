import React from 'react';

import { Layout } from './Layout';
import { PrimaryHeading } from '../components/_typography/PrimaryHeading';
import { VenueList } from '../components/VenueList';
import VenueCover from '../components/VenueCover';

export const Home = () => (
  <Layout className='Home' pushContent>
    <PrimaryHeading>Featured salons</PrimaryHeading>
    <VenueCover displayId={4} />
    <VenueList />
  </Layout>
);

Home.displayName = 'Home';
