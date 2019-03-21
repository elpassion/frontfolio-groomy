import styled from 'styled-components';
import { rem } from 'polished';

import { gaps } from 'styles/vars';

export const StarsRatingWrapper = styled.div`
  display: flex;
  width: auto;
  padding: 0 ${rem(gaps.small)} ${rem(gaps.xsmall)} 0;
`;
