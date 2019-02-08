import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Wrapper,
  MenuLine,
  BurgerMenu,
  WhiteSpace,
  StyledLink,
  ArrowWrapper,
} from './NavigationStyles';
import Logotype from '../SvgAssets/Logotype';
import BackArrow from '../SvgAssets/BackArrow';

class Navigation extends React.Component {
  goBack = () => {
    this.props.history.push('/');
  };

  render() {
    const {
      route: { pathname },
    } = this.props;
    const isPlaceView = pathname.includes('places');

    return (
      <Wrapper isPlaceView={isPlaceView}>
        {isPlaceView ? (
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
