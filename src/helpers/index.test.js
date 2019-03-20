import { invertPixelValue } from 'helpers';

it('Converting values to negative values', () => {
  expect(invertPixelValue('12px')).toBe('-12px');
  expect(invertPixelValue('12rem')).toBe(null);
});
