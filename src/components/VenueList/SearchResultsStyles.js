import styled from 'styled-components';
import { rem } from 'polished';

import { fontSizes, fontWeights, gaps } from 'styles/vars';

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyStateMessage = styled.p`
  padding: ${rem(gaps.large)};
  font-weight: ${fontWeights.bold};
  font-size: ${rem(fontSizes.large)};
  text-align: center;
`;
