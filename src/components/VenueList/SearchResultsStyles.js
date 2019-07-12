import styled from 'styled-components';

import { fontSizes, fontWeights, gaps } from 'styles/vars';

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyStateMessage = styled.p`
  padding: ${gaps.large};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.large};
  text-align: center;
`;

ResultsWrapper.displayName = 'ResultsWrapper';
EmptyStateMessage.displayName = 'EmptyStateMessage';
