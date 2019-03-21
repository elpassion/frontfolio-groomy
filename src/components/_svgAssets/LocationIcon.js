import React from 'react';

import { colors } from 'styles/vars';

const LocationIcon = props => (
  <svg viewBox='0 0 7 10' width={7} height={10} {...props}>
    <path
      fill={colors.lightGray}
      d='M3.375 9.5C1.574 7.383.516 5.892.202 5.028a3.375 3.375 0 1 1 6.345.002c-.315.864-1.372 2.354-3.172 4.47zm0-4.125a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
    />
  </svg>
);

export default LocationIcon;
