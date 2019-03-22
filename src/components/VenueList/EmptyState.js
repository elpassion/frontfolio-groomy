import React from 'react';

import { EmptyStateMessage } from './SearchResultsStyles';

export const EmptyState = () => (
  <EmptyStateMessage>No results found...</EmptyStateMessage>
);

EmptyState.displayName = 'EmptyState';
