import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;

    overscroll-behavior: none;
    scroll-behavior: smooth;

    font-family: 'Press Start 2P', cursive;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
  }

  body {
    position: relative;
  }

  .App {
    position: relative;
    height: 100%;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #fbefe5;
  }

  ::-webkit-scrollbar-thumb {
    background: #c16c36;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #9a582d;
  }
`
