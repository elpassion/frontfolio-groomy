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
  margin: ${rem(gap.tiny)} 0 ${rem(gap.regular)};
  color: ${colors.primaryBlack};
  font-size: ${rem(fontSize.xlarge)};
  font-weight: ${fontWeight.extraBold};
  line-height: 1.2;
`;

export default PrimaryHeading;
