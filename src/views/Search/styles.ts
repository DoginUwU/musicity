import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 1em;
    gap: 1em;
    padding-top: 2em;
    margin-bottom: 10em;

    h1 {
        font-size: 1.5em;
        letter-spacing: 0.1em;
    }
`;

const MusicsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 1em;
`;

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5em;
  overflow: hidden;
  width: 12em;
  padding: 1em;
  border-radius: 0.5em;

  img {
    width: 6em;
    height: 6em;
    border-radius: 10%;
    object-fit: cover;
  }

  .image {
    position: relative;

    div {
      position: absolute;
      bottom: -5px;
      right: -15px;
      padding: 0.1em;
      background-color: #fff;
      border-radius: 50%;
      font-size: 1.5em;
      color: #3d50fa;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & > * {
    transition: all 0.3s ease-in-out;
  }

  h2 {
    font-size: 1em;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 0.7em;
    color: #999;
  }

  &:hover {
    cursor: pointer;
    background-color: #191a1f;
  }
`

export { Container, MusicsContainer, MusicContainer };