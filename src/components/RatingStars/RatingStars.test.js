import React from 'react';
import { shallow, mount } from 'enzyme';

import { RatingStars } from './index';

it('renders correctly', () => {
  const wrapper = shallow(<RatingStars venueId={0} />);
  expect(wrapper).toMatchSnapshot();
});

describe('renders correct number of rating star icons', () => {
  it('with default maxRating', () => {
    const wrapper = mount(<RatingStars fixedRating={2} />);
    const allStarsCount = wrapper.find('RatingIcon').length;
    expect(allStarsCount).toEqual(5);
  });

  it('when maxRating is specified', () => {
    const wrapper = mount(<RatingStars fixedRating={2} maxRating={4} />);
    const allStarsCount = wrapper.find('RatingIcon').length;
    expect(allStarsCount).toEqual(4);
  });
});
