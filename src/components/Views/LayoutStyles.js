import styled from 'styled-components';
import { rem } from 'polished';

import { VenueMeta, VenuePhoto } from '../VenueItem/VenueItemStyles';
import { CoverWrapper, VenueDetails } from '../VenueCover/VenueCoverStyles';
import { HeadingH1 } from '../Typography/PrimaryHeading';
import { SearchWrapper } from '../Search/SearchStyles';
import { slideIn, slideOut } from 'styles/common';
import { sizes, gap, colors } from 'styles/vars';

export const LayoutWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: ${props => (props.pushContent ? rem(sizes.navHeightPadding) : 0)}
    ${rem(gap.regular)} 0;
  background: ${colors.white};
  
  &.home {
    &.page-enter {
      animation: .3s ${slideIn} ease-in-out;
    }
    
    &.page-exit {        
      ${VenueMeta},
      ${CoverWrapper},
      ${HeadingH1},
      ${SearchWrapper},
      ${VenuePhoto} {
        opacity: 0;
      }
    }
  }
  
  &.venue {
    &.page-enter {
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      
      ${VenueDetails} {
        transform: translateY(-75%);
        opacity: 0;
      }
    }
    
    &.page-enter-done {
      position: relative;
      visibility: visible;
      opacity: 1;
      
      ${VenueDetails} {
        transform: translateY(-25%);
        opacity: 1;
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
`;
