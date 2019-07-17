import React from 'react';
import { Link } from 'react-router-dom';

import { PrimaryButton } from 'styles/common';

export const Button = ({ children, href, block = false, ...props }) => (
  <PrimaryButton
    as={href ? Link : 'button'}
    to={href}
    block={block ? true : undefined}
    {...props}
  >
    {children}
  </PrimaryButton>
);

Button.displayName = 'Button';
