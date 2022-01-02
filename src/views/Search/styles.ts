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
    outline: 0px solid rgba(255, 4, 4, 0.5);
    object-fit: cover;
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

    p {
      opacity: 0;
    }

    h2 {
      transform: translateY(1em);
    }

    img {
      outline: 10em solid rgba(255, 4, 4, 0.5);
      border-radius: 0%;
    }
  }
`;

export { Container, MusicsContainer, MusicContainer };