import { useRouter } from 'next/router';
import styled from 'styled-components';

import Footer from 'components/Footer';
import Meta from 'components/Meta';
import Navigation from 'components/Navigation';

import BREAKPOINTS from 'styles/breakpoints';

const Main = styled.main`
  position: relative;

  @media (min-width: ${BREAKPOINTS.medium}) {
    min-height: 100vh;
  }
`;

const PageWrapper = ({ children }) => {
  const { isFallback } = useRouter();
  const isLoading = isFallback;

  if (isLoading) {
    return null;
  }

  return (
    <Main>
      <Meta />
      <Navigation />
      {children}
      <Footer />
    </Main>
  );
};

export default PageWrapper;
