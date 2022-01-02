import React, { createElement, useCallback } from 'react';
import {
  RiSettings4Line, RiStickyNoteLine,
} from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { MENU_ITEMS } from './MenuHelper';

import {
  Container, NavContainer, Nav
} from './styles';

const Menu: React.FC = function () {
  const location = useLocation();

  const hasActive = useCallback(
    (path: string): boolean => location.pathname === path,
    [location]
  )

  return (
    <Container>
      <NavContainer>
        {MENU_ITEMS().map((menu) => (
          <div key={menu.name}>
            <p>{menu.name}</p>
            {menu.items.map((item) => (
              <Nav to={item.path} key={item.name} active={hasActive(item.path)}>
                {item.icon && createElement(item.icon)} {item.name}
              </Nav>
            ))}
          </div>
        ))}
      </NavContainer>
      <NavContainer>
        <div>
          <Nav to="#">
            <RiStickyNoteLine /> Criar playlist
          </Nav>
          <Nav to="/settings" active={hasActive("/settings")}>
            <RiSettings4Line /> Configurações
          </Nav>
          <p>Versão 0.01 (beta)</p>
        </div>
      </NavContainer>
    </Container>
  );
};

export default Menu
