import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { sizes, gap } from '../../helpers/vars';

const Layout = ({ children, pushContent }) => {
  return (
    <LayoutWrapper className='layout' pushContent={pushContent}>
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  padding: ${props => props.pushContent ? rem(sizes.navHeightPadding) : 0 } ${rem(gap.regular)} 0;
`;

export default Layout;
