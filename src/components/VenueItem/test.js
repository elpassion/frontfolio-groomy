import React from 'react';
import { shallow } from 'enzyme';

import { VenueItem } from './index';

const mockDetails = {
  id: 1,
  name: 'The Bark Club',
  address: '8 Brondesbury Park',
  distance: '1.2km',
  price: '$120',
};

it('renders correctly', () => {
  const wrapper = shallow(<VenueItem details={mockDetails} />);
  expect(wrapper).toMatchSnapshot();
});
