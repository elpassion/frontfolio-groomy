import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div``;

export default Layout;
