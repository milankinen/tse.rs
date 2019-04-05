import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken, lighten } from "polished";

const Wrapper = styled.header`
  grid-column: 2;
  padding: 2rem 2rem 5rem 2rem;
`;

const Content = styled.h2`
  max-width: ${props => props.theme.maxWidth};
  margin: 0.5rem auto;

  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.grey.dark};
    }
  }
`;

const Header = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};
