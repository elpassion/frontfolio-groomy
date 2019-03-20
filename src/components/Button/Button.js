import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonBase } from '../../styles/common';

const Button = ({ children, href, onClick }) => {
  return (
    <React.Fragment>
      {href ? (
        <PrimaryButtonLink to={href}>{children}</PrimaryButtonLink>
      ) : (
        <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
      )}
    </React.Fragment>
  );
};

const PrimaryButtonLink = styled(Link)`
  ${ButtonBase};
`;

const PrimaryButton = styled.button`
  ${ButtonBase};
  appearance: none;
`;

export default Button;
