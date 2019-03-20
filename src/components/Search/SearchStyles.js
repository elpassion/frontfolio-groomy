import styled from 'styled-components';
import { rem, transparentize, placeholder } from 'polished';

import { FlexValignCenter } from 'styles/common';
import { gaps, colors, radii, fontSizes, sizes } from 'styles/vars';

export const SearchWrapper = styled.div`
  ${FlexValignCenter};
  width: 100%;
  height: ${rem(sizes.inputHeight)};
  margin: 0 0 ${rem(gaps.medium)};
  padding: 0 ${rem(gaps.xsmall)};
  color: ${colors.lightGray};
  font-size: ${rem(fontSizes.small)};
  background: ${colors.white};
  border-radius: ${radii.mediumBorderRadius};
  box-shadow: 0 ${rem(gaps.tiny)} ${rem(gaps.medium)} 0
    ${transparentize(0.7, colors.lightGray)};
  transition: opacity 0.2s ease-in;
`;

export const SearchForm = styled.input.attrs({
  type: 'text',
})`
  ${placeholder({ color: colors.lightGray })};
  width: 100%;
  margin: 0 0 0 ${rem(gaps.xsmall)};
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
