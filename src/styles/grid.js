import styled, { css } from 'styled-components';

export const GRID_WIDTH = 1280;
export const COLUMNS = 12;
const GUTTER = 20;

export const columns = (start, cols) =>
  start
    ? css`
        grid-column: col-start ${start} / span ${cols};
      `
    : css`
        grid-column: span ${cols};
      `;

export const grid = (col) => css`
  display: grid;
  grid-template-columns: repeat(${col}, [col-start] 1fr);
  column-gap: ${GUTTER}px;
  grid-auto-flow: dense;
`;

export const GridOuter = styled.div`
  padding: 0 var(--gutter-side);
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GridInner = styled.div`
  position: relative;
  max-width: ${GRID_WIDTH}px;
  width: 100%;
  ${grid(COLUMNS)}
`;

export const Grid = ({ children, ...props }) => (
  <GridOuter {...props}>
    <GridInner>{children}</GridInner>
  </GridOuter>
);
