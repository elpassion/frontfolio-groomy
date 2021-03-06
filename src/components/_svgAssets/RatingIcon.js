import React from 'react';
import styled from 'styled-components';

import { colors, gaps } from 'styles/vars';

export const RatingIcon = ({ isActive, ...props }) => (
  <BlockIcon viewBox='0 0 11 10' width={11} height={10} {...props}>
    <path
      fill={isActive ? colors.primaryViolet : 'currentColor'}
      d='M5.5 8.25l-3.233 1.7.618-3.6L.269 3.8l3.615-.525L5.5 0l1.616 3.275 3.615.525-2.616 2.55.618 3.6z'
    />
  </BlockIcon>
);

export const BlockIcon = styled.svg`
  display: block;

  &:not(:last-child) {
    margin: 0 ${gaps.xsmall} 0 0;
  }
`;

RatingIcon.displayName = 'RatingIcon';
