import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ButtonBase } from 'styles/common';

export const Button = ({ children, href, onClick }) => (
  <>
    {href ? (
      <PrimaryButtonLink to={href}>{children}</PrimaryButtonLink>
    ) : (
      <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
    )}
  </>
);

const PrimaryButtonLink = styled(Link)`
  ${ButtonBase};
`;

const PrimaryButton = styled.button`
  ${ButtonBase};
  appearance: none;
`;

Button.displayName = 'Button';
PrimaryButtonLink.displayName = 'PrimaryButtonLink';
PrimaryButton.displayName = 'PrimaryButton';
