import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavProps = {
    active?: boolean;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: #191a1f;
  padding: 1em 1em;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  gap: 2em;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    gap: 0.8em;
  }

  p {
    color: #a1a1a1;
    font-size: 0.8em;
    align-self: start;
  }
`;

const Nav = styled(Link)<NavProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 0.8em 2em 0.8em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9em;
  background: ${props => (props.active ? '#3d50fa' : 'transparent')};
  color: #fff;
  text-decoration: none;

  svg {
    margin-right: 0.5em;
  }

  &:hover {
    background: #3d50fa;
  }
`

const Divider = styled.div`
    width: 1em;
    height: 1em;
`;

const NavTip = styled.span`
  font-size: 0.8em;
  color: #fff;
  padding: 0.2em 1em;
  border-radius: 1em;
  background: #ffb000;
  margin-left: auto;
`;

export {
  Container, NavContainer, Nav, Divider, NavTip,
};
