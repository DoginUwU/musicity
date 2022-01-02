import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    min-width: 30em;
    padding: 1em;
    outline: none;
    border: none;
    border: 1px solid #303030;
    font-size: 1.1em;
    font-weight: bold;
    color: #fff;
    background-color: #191a1f;
    border-radius: 0.5em;

    &:focus {
      border: 1px solid #3d50fa;
    }
  }
`;

export { Container };