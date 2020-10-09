import { createGlobalStyle } from 'styled-components'
import resetCSS from 'styled-reset'

export default createGlobalStyle`
  ${resetCSS}

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monosp
  }
`