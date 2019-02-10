import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PlaceMeta, PlacePhoto } from '../PlaceItems/PlaceItemStyles';
import { CoverWrapper, PlaceDetails } from '../PlaceCover/PlaceCoverStyles';
import { HeadingH1 } from '../Typography/PrimaryHeading';
import { SearchWrapper } from '../Search/SearchStyles';
import { rem } from 'polished';

import { sizes, gap, colors } from '../../helpers/vars';

const Layout = ({ children, pushContent, className }) => {
  return (
    <LayoutWrapper className={className} pushContent={pushContent}>
      {children}
    </LayoutWrapper>
  );
};

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: .2;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: .2;
  }
`;

const LayoutWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: ${props => (props.pushContent ? rem(sizes.navHeightPadding) : 0)}
    ${rem(gap.regular)} 0;
  background: ${colors.white};
  
  &.home {
    &.page-enter {
      animation: .3s ${slideIn} ease-in-out;
    }
    
    &.page-enter-active {
      transform: translateX(0);
    }
    
    &.page-enter-done {
      transform: translateX(0);
    }
    
    &.page-exit {        
      ${PlaceMeta},
      ${CoverWrapper},
      ${HeadingH1},
      ${SearchWrapper},
      ${PlacePhoto} {
        opacity: 0;
      }
    }
  }
  
  &.place {
    &.page-enter {
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      
      ${PlaceDetails} {
        opacity: 0;
        transform: translateY(-75%);
      }
    }
    
    &.page-enter-done {
      position: relative;
      visibility: visible;
      opacity: 1;
      
      ${PlaceDetails} {
        opacity: 1;
        transform: translateY(-25%);
      }
    }
    
    &.page-exit {        
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      animation: .3s ${slideOut} ease-in-out;
    }
  }



  &.page-enter-done {
  }

  &.page-exit {
  }

  &.page-exit-done {}
`;

export default Layout;
