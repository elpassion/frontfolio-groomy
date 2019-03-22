import React from 'react';

import { LayoutWrapper } from './LayoutStyles';

export const Layout = ({ children, pushContent, className }) => (
  <LayoutWrapper className={className} pushContent={pushContent}>
    {children}
  </LayoutWrapper>
);

Layout.displayName = 'Layout';
