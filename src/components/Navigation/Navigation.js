import React from 'react';
import { withRouter } from 'react-router-dom';

import Logotype from '../SvgAssets/Logotype';
import BackArrow from '../SvgAssets/BackArrow';
import {
  Wrapper,
  MenuLine,
  BurgerMenu,
  WhiteSpace,
  StyledLink,
  ArrowWrapper,
} from './NavigationStyles';

class Navigation extends React.Component {
  goBack = () => {
    this.props.history.push('/');
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
          [
            <BurgerMenu key='burger-menu'>
              <MenuLine />
              <MenuLine />
              <MenuLine />
            </BurgerMenu>,
            <StyledLink to='/' key='logotype'>
              <Logotype isSimple />
            </StyledLink>,
          ]
        )}
        <WhiteSpace />
      </Wrapper>
    );
  }
}

export default withRouter(Navigation);
