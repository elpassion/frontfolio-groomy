import React from 'react';
import { shallow } from 'enzyme';

import { Navigation } from './index';

describe('Navigation on the home page', () => {
  let navigation;
  beforeEach(() => {
    navigation = shallow(<Navigation route={{ pathname: '/' }} />);
  });

  it('renders BurgerMenu component', () => {
    expect(navigation.find('BurgerMenu')).toHaveLength(1);
  });

  it('renders Logotype', () => {
    expect(navigation.find('Logotype')).toHaveLength(1);
  });

  it("doesn't render BackArrow icon", () => {
    expect(navigation.find('BackArrow')).toHaveLength(0);
  });
});

describe('Navigation on the venue details page', () => {
  let navigation;
  beforeEach(() => {
    navigation = shallow(
      <Navigation route={{ pathname: 'venues/test-venue' }} />
    );
  });

  it('renders ArrowWrapper', () => {
    expect(navigation.find('ArrowWrapper')).toHaveLength(1);
  });

  it('renders BackArrow icon', () => {
    expect(navigation.find('BackArrow')).toHaveLength(1);
  });

  it('triggers goBack method when ArrowWrapper is clicked', () => {
    const mockGoBack = jest.fn().mockName('goBack');
    navigation.instance().goBack = mockGoBack;
    navigation.instance().forceUpdate();
    const arrow = navigation.find('ArrowWrapper');

    arrow.simulate('click');

    expect(mockGoBack).toBeCalledTimes(1);
  });
});
