import styled from 'styled-components';
import { rem } from 'polished';
import { gap } from '../../helpers/vars';

export const StarsRatingWrapper = styled.div`
  display: flex;
  width: auto;
  padding: 0 ${rem(gap.tiny)} ${rem(gap.pico)} 0;
`;
