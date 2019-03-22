import React from 'react';
import { withRouter } from 'react-router-dom';

import Logotype from '../_svgAssets/Logotype';
import BackArrow from '../_svgAssets/BackArrow';
import {
  Wrapper,
  MenuLine,
  BurgerMenu,
  WhiteSpace,
  StyledLink,
  ArrowWrapper,
} from './NavigationStyles';
import { getRoutePath } from 'helpers/getRoutePath';

class Navigation extends React.Component {
  goBack = () => {
    this.props.history.push(getRoutePath('HOME'));
  };

  render() {
    const {
      route: { pathname },
    } = this.props;
    const isVenuePage = pathname.includes('venues');

    return (
      <Wrapper isVenuePage={isVenuePage}>
        {isVenuePage ? (
          <ArrowWrapper onClick={this.goBack}>
            <BackArrow />
          </ArrowWrapper>
        ) : (
          <>
            <BurgerMenu>
              <MenuLine />
              <MenuLine />
              <MenuLine />
            </BurgerMenu>
            <StyledLink to={getRoutePath('HOME')}>
              <Logotype isSimple />
            </StyledLink>
          </>
        )}
        <WhiteSpace />
      </Wrapper>
    );
  }
}

Navigation.displayName = 'Navigation';
export default withRouter(Navigation);
