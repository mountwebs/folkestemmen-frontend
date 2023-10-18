import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { QueryParameterProvider } from './queryParameterProvider';
import GlobalStyle from './styles/globalStyle';
import AnswerBoard from './components/AnswerBoard/AnswerBoard';
import { theme } from './styles/theme';
import styled from 'styled-components';
import { UserProvider } from './UserContext';
import device from './constants/breakpoints';
import { Helmet } from 'react-helmet';

const StyledMain = styled.main`
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 1328px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  position: relative;
  padding-top: 0;

  @media only screen and ${device.sm} {
    padding: 2rem 1rem 4rem;
  }
`;

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showWhatsThisModal, setShowWhatsThisModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  return (
    <UserProvider>
      <QueryParameterProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <ThemeProvider theme={theme.munch}>
          <GlobalStyle />
          <Layout
            showLoginModal={showLoginModal}
            setShowLoginModal={setShowLoginModal}
            showWhatsThisModal={showWhatsThisModal}
            setShowWhatsThisModal={setShowWhatsThisModal}
            showWelcomeModal={showWelcomeModal}
            setShowWelcomeModal={setShowWelcomeModal}
          >
            <StyledMain>
              <AnswerBoard />
            </StyledMain>
          </Layout>
        </ThemeProvider>
      </QueryParameterProvider>
    </UserProvider>
  );
}

export default App;
