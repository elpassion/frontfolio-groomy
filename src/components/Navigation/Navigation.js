import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

import { gap, colors, sizes } from '../../helpers/vars';
import Logotype from '../SvgAssets/Logotype';

const Navigation = ({ route: { pathname } }) => {
  const isPlaceView = pathname.includes('places');

  return (
    <Wrapper>
      <BurgerMenu>
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </BurgerMenu>

      {isPlaceView ? null : (
        <StyledLink to='/'>
          <Logotype isSimple />
        </StyledLink>
      )}

      <WhiteSpace />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${rem(sizes.navHeight)};
  padding: 0 ${rem(gap.regular)};
`;

const MenuLine = styled.span`
  display: block;
  width: 85%;
  height: ${rem('1px')};
  background: ${colors.primaryViolet};

  &:nth-child(2) {
    width: 45%;
  }

  &:nth-child(3) {
    width: 60%;
  }

  &:not(:last-child) {
    margin: 0 0 ${rem(gap.pico)};
  }
`;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${rem(gap.regular)};
  height: ${rem(gap.regular)};
`;

const WhiteSpace = styled(BurgerMenu)`
  opacity: 0;
  pointer-events: none;
`;

const StyledLink = styled(Link)`
  display: block;
`;

export default Navigation;
