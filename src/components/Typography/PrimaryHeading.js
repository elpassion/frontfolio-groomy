import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { gap, fontWeight, fontSize, colors } from '../../helpers/vars';

const PrimaryHeading = ({ children }) => {
  return (
    <HeadingH1>
      {children}
    </HeadingH1>
  );
};

const HeadingH1 = styled.h1`
  display: block;
  margin: 0 0 ${rem(gap.medium)};
  color: ${colors.primaryBlack};
  font-size: ${rem(fontSize.xlarge)}};
  font-weight: ${fontWeight.extraBold};
`;

export default PrimaryHeading;
