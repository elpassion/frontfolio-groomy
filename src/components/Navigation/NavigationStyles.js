import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { gaps, colors, sizes } from 'styles/vars';

export const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${sizes.navHeight};
  padding: 0 ${gaps.medium};
`;

export const ArrowWrapper = styled.div`
  position: relative;
  z-index: 5;
`;

export const MenuLine = styled.span`
  display: block;
  width: 85%;
  height: ${'1px'};
  background: ${colors.primaryViolet};

  &:nth-child(2) {
    width: 45%;
  }

  &:nth-child(3) {
    width: 60%;
  }

  &:not(:last-child) {
    margin: 0 0 ${gaps.xsmall};
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${gaps.medium};
  height: ${gaps.medium};
`;

export const WhiteSpace = styled(BurgerMenu)`
  opacity: 0;
  pointer-events: none;
`;

export const StyledLink = styled(Link)`
  display: block;
`;

Wrapper.displayName = 'Wrapper';
ArrowWrapper.displayName = 'ArrowWrapper';
MenuLine.displayName = 'MenuLine';
BurgerMenu.displayName = 'BurgerMenu';
WhiteSpace.displayName = 'WhiteSpace';
StyledLink.displayName = 'StyledLink';
