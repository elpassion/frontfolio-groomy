import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

import { gap } from '../../helpers/vars';
import Logotype from '../SvgAssets/Logotype';

const Navigation = (props) => {
  const {route: { pathname }} = props;
  const isPlaceView = pathname.includes('places');

  return (
    <Wrapper className='sss'>
      <BurgerMenu>
        Burg
      </BurgerMenu>

      {isPlaceView ? null :
        <StyledLink to='/'>
          <Logotype isSimple />
        </StyledLink>
      }

      <BurgerMenu>
        S
      </BurgerMenu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${rem(gap.regular)} ${rem(gap.small)};
`;

const BurgerMenu = styled.div`
  width: 20px;
  height: 20px;
`;

const StyledLink = styled(Link)`
  display: block;
`;

export default Navigation;
