import React from 'react';

import { colors } from 'styles/vars';

export const PriceIcon = props => (
  <svg viewBox='0 0 8 8' width={8} height={8} {...props}>
    <path
      fill={colors.lightGray}
      d='M3 3C1.465 4.344.631 5.344.5 6 .369 6.656.869 7.323 2 8h4c1.202-.323 1.702-.99 1.5-2C7.298 4.99 6.465 3.99 5 3H3zm0-.5h2l1-2L5 0H3L2 .5z'
    />
  </svg>
);

PriceIcon.displayName = 'PriceIcon';
