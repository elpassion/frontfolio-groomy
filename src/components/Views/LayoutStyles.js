import styled from 'styled-components';
import { PlaceMeta, PlacePhoto } from '../PlaceItems/PlaceItemStyles';
import { CoverWrapper, PlaceDetails } from '../PlaceCover/PlaceCoverStyles';
import { HeadingH1 } from '../Typography/PrimaryHeading';
import { SearchWrapper } from '../Search/SearchStyles';
import { slideIn, slideOut } from '../Common/CommonStyles';
import { rem } from 'polished';
import { sizes, gap, colors } from '../../helpers/vars';

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
        transform: translateY(-75%);
        opacity: 0;
      }
    }
    
    &.page-enter-done {
      position: relative;
      visibility: visible;
      opacity: 1;
      
      ${PlaceDetails} {
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
