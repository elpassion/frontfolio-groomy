import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = props => {
  const { children, href, onClick } = props;

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

const PrimaryButtonLink = styled(Link)``;

const PrimaryButton = styled.button``;

export default Button;
