import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonTheme from './buttonTheme';

const Menu = () => {
  return (
    <MenuContainer>
      <ButtonTheme></ButtonTheme>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  height: 3.375rem;
  background-color: teal;
  position: fixed;
  width: auto;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: right;
  display: inline-grid;
`;

Menu.propTypes = {
  themeG: PropTypes.string,
  changerTheme: PropTypes.func
};

export default Menu;
