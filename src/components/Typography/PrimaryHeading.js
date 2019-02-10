import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { gap, fontWeight, fontSize, colors } from '../../helpers/vars';

const PrimaryHeading = ({ children }) => {
  return <HeadingH1>{children}</HeadingH1>;
};

export const HeadingH1 = styled.h1`
  display: block;
  margin: ${rem(gap.tiny)} 0 ${rem(gap.regular)};
  color: ${colors.primaryBlack};
  font-weight: ${fontWeight.extraBold};
  font-size: ${rem(fontSize.xlarge)};
  transition: opacity 0.2s ease-in;
`;

export default PrimaryHeading;
