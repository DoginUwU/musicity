import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    background-color: #1b1c22;
    margin: 0 0 0 13em;
    position: relative;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #878787;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
`
