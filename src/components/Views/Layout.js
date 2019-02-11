import React from 'react';
import { LayoutWrapper } from './LayoutStyles';

const Layout = ({ children, pushContent, className }) => {
  return (
    <LayoutWrapper className={className} pushContent={pushContent}>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
