import styled from 'styled-components';
import { rem, transparentize, placeholder } from 'polished';
import { gap, colors, misc, fontSize, sizes } from '../../helpers/vars';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(sizes.inputHeight)};
  margin: 0 0 ${rem(gap.medium)};
  padding: 0 ${rem(gap.xsmall)};
  color: ${colors.lightGray};
  font-size: ${rem(fontSize.small)};
  background: ${colors.white};
  border-radius: ${misc.mediumBorderRadius};
  box-shadow: 0 ${rem(gap.tiny)} ${rem(gap.medium)} 0
    ${transparentize(0.7, colors.lightGray)};
`;

export const SearchForm = styled.input.attrs({
  type: 'text',
})`
  ${placeholder({ color: colors.lightGray })};
  width: 100%;
  margin: 0 0 0 ${rem(gap.xsmall)};
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  background: transparent;
  border: 0;
  appearance: none;

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;
