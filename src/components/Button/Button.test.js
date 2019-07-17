import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import { Button } from './index';

it('renders <a /> wher href passed', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Button href='test-href' />
    </MemoryRouter>
  );
  expect(wrapper.exists('[href="test-href"]')).toBe(true);
});

it('renders <butto /> when href prop is not passed', () => {
  const wrapper = mount(<Button />);
  expect(wrapper.exists('a')).toBe(false);
  expect(wrapper.exists('button')).toBe(true);
});

it('handles onClick event', () => {
  const mockOnClick = jest.fn();
  const wrapper = mount(<Button onClick={mockOnClick} />);
  wrapper.find('button').simulate('click');
  expect(mockOnClick).toHaveBeenCalled();
});
