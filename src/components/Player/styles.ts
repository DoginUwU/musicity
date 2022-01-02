import styled, { css } from "styled-components";

interface IContainerProps {
  disabled?: boolean;
 }

const Container = styled.div<IContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5em;
  background-color: #0f0f10;
  color: #fff;
  padding: 0 2em 0 13em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  gap: 2em;

  ${props => props.disabled && css`
    display: none;
  `}
`

const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5em;
  gap: 1em;

  svg {
    cursor: pointer;
  }

  svg:hover {
    fill: #6978ff;
  }
`;

const PlayerInfo = styled.div`
  position: relative;
  max-width: 11em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 3em;
  gap: 1em;

  img {
    width: 3em;
    height: 3em;
    border-radius: 10%;
    object-fit: cover;
  }

  h2 {
    font-size: 0.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 0.6em;
    color: #a1a1a1;
  }

  div {
    width: 100%;
  }
`

const PlayerProgress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  width: 100%;
  flex: 1;

  input[type='range'] {
    width: 100%;
    height: 0.4em;

    -webkit-appearance: none;
    appearance: none;
    background-color: #23242a;
      border-radius: 7px;
      overflow: hidden;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #3d50fa;
    border-radius: 7px;
    box-shadow: -100vw 0 0 100vw #3d50fa;
    cursor: pointer;
    width: 5px;
    height: 0.4em;
  }

  p {
    font-size: 0.8em;
    color: #a1a1a1;
  }
`

export { Container, PlayerControls, PlayerInfo, PlayerProgress };