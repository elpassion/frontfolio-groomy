import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ButtonBase } from 'styles/common';

const Button = ({ children, href, onClick }) => {
  return (
    <>
      {href ? (
        <PrimaryButtonLink to={href}>{children}</PrimaryButtonLink>
      ) : (
        <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
      )}
    </>
  );
};

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

export default Button;
