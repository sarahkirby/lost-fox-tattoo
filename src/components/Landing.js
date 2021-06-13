import styled from 'styled-components';

import BREAKPOINTS from 'styles/breakpoints';
import { Grid, columns } from 'styles/grid';

const Container = styled.div`
  @media (min-width: ${BREAKPOINTS.small}) {
    min-height: 1024px;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    min-height: 768px;
  }
`;

const BgImg = styled.div`
  margin-bottom: var(--space-sm);
  width: 100%;
  height: 250px;
  background: url('/images/placeholder.jpg') no-repeat center;
  background-size: cover;

  @media (min-width: ${BREAKPOINTS.small}) {
    height: 500px;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

const H2 = styled.h2`
  ${columns(null, 12)}
  margin-bottom: var(--space-lg);
  max-width: 630px;

  @media (min-width: ${BREAKPOINTS.medium}) {
    margin: var(--gutter-side) 0;
  }
`;

const Landing = () => {
  return (
    <Container>
      <BgImg />
      <Grid>
        <H2>
          Lost Fox is a contemporary tattoo studio. Lorem ipsum dolor sit amet,
          consec tetur adipiscing elit ellente esque ut erat metus.
        </H2>
      </Grid>
    </Container>
  );
};

export default Landing;
