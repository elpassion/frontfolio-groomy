import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

import { gap, colors, sizes } from 'styles/vars';

export const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${rem(sizes.navHeight)};
  padding: 0 ${rem(gap.regular)};
`;

export const ArrowWrapper = styled.div`
  position: relative;
  z-index: 5;
`;

export const MenuLine = styled.span`
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

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${rem(gap.regular)};
  height: ${rem(gap.regular)};
`;

export const WhiteSpace = styled(BurgerMenu)`
  opacity: 0;
  pointer-events: none;
`;

export const StyledLink = styled(Link)`
  display: block;
`;
