import styled from 'styled-components';
import { rem } from 'polished';
import { fontSize, fontWeight, gap } from '../../styles/vars';

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyStateMessage = styled.p`
  padding: ${rem(gap.medium)};
  font-weight: ${fontWeight.bold};
  font-size: ${rem(fontSize.large)};
  text-align: center;
`;
