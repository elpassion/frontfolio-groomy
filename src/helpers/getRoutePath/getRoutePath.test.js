import { getRoutePath } from './index';

describe('getRoutePath', () => {
  it('returns correct path to the home page', () => {
    expect(getRoutePath('HOME')).toEqual('/');
  });
  it('returns correct path to the respective venue page', () => {
    expect(getRoutePath('VENUE', 'test-slug')).toEqual('/venues/test-slug');
  });
});
