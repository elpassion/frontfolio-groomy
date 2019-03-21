import React from 'react';
import styled from 'styled-components';

import { gaps, fontWeights, fontSizes, colors } from 'styles/vars';

const PrimaryHeading = ({ children }) => {
  return <HeadingH1>{children}</HeadingH1>;
};

export const HeadingH1 = styled.h1`
  display: block;
  margin: ${gaps.small} 0 ${gaps.medium};
  color: ${colors.primaryBlack};
  font-weight: ${fontWeights.extraBold};
  font-size: ${fontSizes.xlarge};
  transition: opacity 0.2s ease-in;
`;

PrimaryHeading.displayName = 'PrimaryHeading';
export default PrimaryHeading;
