import { invertPixelValue } from './index';

it('converts values to negative values', () => {
  expect(invertPixelValue('12px')).toBe('-12px');
  expect(invertPixelValue('12rem')).toBe(null);
});
