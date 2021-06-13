import { createGlobalStyle } from 'styled-components';

import BREAKPOINTS from './breakpoints';
import COLORS from './colors';
import FONTS from './fonts';
import { GRID_WIDTH } from './grid';

export default createGlobalStyle`
  :root {
    --gutter-side: 20px;
    --max-width: ${GRID_WIDTH}px;

    --space-sm: 30px;
    --space-lg: 80px;

    --color-bg: ${COLORS.beige};
    --color-text: ${COLORS.black};

    --font-family: ${FONTS.valueSerif.medium};
    --font-size-base: 16px;
    --font-size-sm: 17px;
    --font-size-lg: 27px;
    --line-height-sm: 20px;
    --line-height-lg: 32px;

    @media (min-width: ${BREAKPOINTS.small}) {
      --font-size-lg: 37px;
      --line-height-lg: 44px;
    }

    @media (min-width: ${BREAKPOINTS.medium}) {
      --gutter-side: 80px;
    }
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: var(--font-size-base);
    font-family: var(--font-family);
    color: var(--color-text);
    background-color: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  ::selection,
  ::-moz-selection {
    background: var(--color-text);
    color: var(--color-bg);
    opacity: 1;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h2 {
    font-size: var(--font-size-lg);
    line-height:  var(--line-height-lg);
  }

  p {
    font-size: var(--font-size-sm);
    line-height:  var(--line-height-sm);
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }
`;
