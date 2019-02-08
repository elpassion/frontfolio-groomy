import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { sizes, gap } from '../../helpers/vars';

const Layout = ({ children, pushContent, className }) => {
  return (
    <LayoutWrapper className={className} pushContent={pushContent}>
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  z-index: 1;
  padding: ${props => (props.pushContent ? rem(sizes.navHeightPadding) : 0)}
    ${rem(gap.regular)} 0;

  &.page-enter {
    opacity: 0;
    transition: all 0.5s ease-in;
  }

  &.page-enter-done {
    opacity: 1;
  }

  &.page-exit {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &.page-exit-done {}
`;

export default Layout;
