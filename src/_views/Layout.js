import React from 'react';

import { LayoutWrapper } from './LayoutStyles';

const Layout = ({ children, pushContent, className }) => {
  return (
    <LayoutWrapper className={className} pushContent={pushContent}>
      {children}
    </LayoutWrapper>
  );
};

Layout.displayName = 'Layout';
export default Layout;
