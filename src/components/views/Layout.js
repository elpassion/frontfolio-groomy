import React from 'react';
import styled from 'styled-components';

const Layout = ({ children, className }) => {
  return (
    <LayoutWrapper className={className}>
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div``;

export default Layout;
