import { css } from 'styled-components';

export const loadFonts = css`
  @font-face {
    font-family: 'Value Serif';
    src: url('/fonts/value-serif/value-serif-medium.woff2') format('woff2'),
      url('/fonts/value-serif/value-serif-medium.woff') format('woff');
  }
`;

export default {
  valueSerif: {
    medium: 'Value Serif, sans-serif',
  },
};
