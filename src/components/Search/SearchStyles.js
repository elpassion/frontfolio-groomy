import styled from 'styled-components';
import { placeholder } from 'polished';

import { FlexAlignCenter } from 'styles/common';
import { gaps, colors, radii, fontSizes, sizes } from 'styles/vars';

export const SearchWrapper = styled.div`
  ${FlexAlignCenter};
  width: 100%;
  height: ${sizes.inputHeight};
  margin: 0 0 ${gaps.large};
  padding: 0 ${gaps.regular};
  color: ${colors.lightGray};
  font-size: ${fontSizes.small};
  background: ${colors.white};
  border-radius: ${radii.mediumBorderRadius};
  box-shadow: 0 ${gaps.small} ${gaps.large} 0 ${colors.lightGrayTransparent};
  transition: opacity 0.2s ease-in;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  ${placeholder({ color: colors.lightGray })};
  width: 100%;
  margin: 0 0 0 ${gaps.regular};
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
