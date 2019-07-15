import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

it('renders PrimaryButtonLink when receives href prop', () => {
  const wrapper = shallow(<Button href='test-href' />);
  expect(wrapper.find('PrimaryButtonLink')).toHaveLength(1);
});

it('passes href prop down to PrimaryButtonLink', () => {
  const wrapper = shallow(<Button href='test-href' />);
  expect(wrapper.find('PrimaryButtonLink').props().to).toBe('test-href');
});

it('renders PrimaryButton when href prop is not passed', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find('PrimaryButtonLink')).toHaveLength(0);
  expect(wrapper.find('PrimaryButton')).toHaveLength(1);
});

it('passes onClick prop down to PrimaryButton', () => {
  const mockOnClick = jest.fn();
  const wrapper = shallow(<Button onClick={mockOnClick} />);
  expect(wrapper.find('PrimaryButton').props().onClick).toEqual(mockOnClick);
});
