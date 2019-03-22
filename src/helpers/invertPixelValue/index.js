export function invertPixelValue(value) {
  if (value.includes('px')) {
    return `-${value}`;
  }

  return null;
}
