import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { sizes } from '../../helpers/vars';

const Layout = ({ children, pushContent }) => {
  return (
    <LayoutWrapper pushContent={pushContent}>
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  padding: ${props => props.pushContent ? rem(sizes.navHeightPadding) : 0 } 0 0 0;
`;

export default Layout;
