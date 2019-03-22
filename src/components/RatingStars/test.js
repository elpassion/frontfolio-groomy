import React from 'react';
import { shallow, mount } from 'enzyme';

import RatingStars from './index';

it('renders correctly', () => {
  const wrapper = shallow(<RatingStars venueId={0} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly', () => {
  const wrapper = shallow(<RatingStars venueId={0} />);
  expect(wrapper).toMatchSnapshot();
});

describe('renders correct number of rating star icons', () => {
  it('with default maxRating', () => {
    const wrapper = mount(<RatingStars venueId={0} />);
    const expectedCount = wrapper.prop('maxRating');
    const actualCount = wrapper.find('RatingIcon').length;
    expect(actualCount).toEqual(expectedCount);
  });

  it('when maxRating is specified', () => {
    const wrapper = mount(<RatingStars venueId={0} maxRating={4} />);
    const expectedCount = wrapper.prop('maxRating');
    const actualCount = wrapper.find('RatingIcon').length;
    expect(actualCount).toEqual(expectedCount);
  });
});
