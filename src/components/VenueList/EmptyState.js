import React from 'react';

import { EmptyStateMessage } from './SearchResultsStyles';

const EmptyState = () => (
  <EmptyStateMessage>No results found...</EmptyStateMessage>
);

EmptyState.displayName = 'EmptyState';
export default EmptyState;
