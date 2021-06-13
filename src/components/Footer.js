import styled from 'styled-components';

import BREAKPOINTS from 'styles/breakpoints';
import { Grid, columns } from 'styles/grid';

import { INSTAGRAM_URL, CONTACT_EMAIL, GOOGLE_MAPS_URL } from 'utils/constants';

const Container = styled.footer`
  @media (min-width: ${BREAKPOINTS.small}) {
    margin-bottom: var(--gutter-side);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

const A = styled.a`
  ${columns(null, 12)};
  padding-bottom: var(--space-sm);

  @media (min-width: ${BREAKPOINTS.medium}) {
    ${columns(null, 3)};
    padding-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Grid>
        <A href={`mailto:${CONTACT_EMAIL}`}>Contact</A>
        <A href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Instagram
        </A>
        <A href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
          Get directions
        </A>
      </Grid>
    </Container>
  );
};

export default Footer;
