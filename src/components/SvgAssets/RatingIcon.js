import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { colors, gap } from '../../helpers/vars';

const RatingIcon = ({ isActive, ...props }) => (
  <BlockIcon viewBox='0 0 11 10' width={11} height={10} {...props}>
    <path
      fill={isActive ? colors.primaryViolet : '#e7e7e7'}
      d='M5.5 8.25l-3.233 1.7.618-3.6L.269 3.8l3.615-.525L5.5 0l1.616 3.275 3.615.525-2.616 2.55.618 3.6z'
    />
  </BlockIcon>
);

const BlockIcon = styled.svg`
  display: block;

  &:not(:last-child) {
    margin: 0 ${rem(gap.pico)} 0 0;
  }
`;

export default RatingIcon;
