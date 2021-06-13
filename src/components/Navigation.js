import Link from 'next/link';
import styled from 'styled-components';

import BREAKPOINTS from 'styles/breakpoints';

const Nav = styled.nav`
  margin: var(--gutter-side);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  @media (min-width: ${BREAKPOINTS.medium}) {
    left: auto;
    right: 0;
  }
`;

const Img = styled.img`
  width: 65px;

  @media (min-width: ${BREAKPOINTS.medium}) {
    width: 109px;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <Img
            src="/images/logo.png"
            alt="Lost Fox Tattoo logo - simple illustration of a fox head surrounded by logotype"
          />
        </a>
      </Link>
    </Nav>
  );
};

export default Navigation;
