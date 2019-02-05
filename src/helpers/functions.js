export function negativeValue(value) {
  if (value.includes('px')) {
    return `-${value}`;
  }

  return null;
}

export default {
  negativeValue,
};
