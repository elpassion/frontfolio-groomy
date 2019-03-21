import styled from 'styled-components';
import { rem, placeholder } from 'polished';

import { FlexAlignCenter } from 'styles/common';
import { gaps, colors, radii, fontSizes, sizes } from 'styles/vars';

export const SearchWrapper = styled.div`
  ${FlexAlignCenter};
  width: 100%;
  height: ${rem(sizes.inputHeight)};
  margin: 0 0 ${rem(gaps.large)};
  padding: 0 ${rem(gaps.regular)};
  color: ${colors.lightGray};
  font-size: ${rem(fontSizes.small)};
  background: ${colors.white};
  border-radius: ${radii.mediumBorderRadius};
  box-shadow: 0 ${rem(gaps.small)} ${rem(gaps.large)} 0
    ${colors.lightGrayTransparent};
  transition: opacity 0.2s ease-in;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  ${placeholder({ color: colors.lightGray })};
  width: 100%;
  margin: 0 0 0 ${rem(gaps.regular)};
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

SearchWrapper.displayName = 'SearchWrapper';
SearchInput.displayName = 'SearchInput';
