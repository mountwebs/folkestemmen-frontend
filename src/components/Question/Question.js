import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeading = styled.div`
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.questionHeader.text};
  background: ${({ theme }) => theme.colors.questionHeader.background};
  border-radius: 20px;
  display: inline-block;
  margin-top: 1rem;
  text-align: center;
  z-index: 80;
  font-size: 0.9rem;

  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  background-color: #FDF8FF;
  margin-bottom: 1rem;
  padding: 3rem 2rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.question.text};
  border-radius: 25px;
  text-align: center;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  p {
    max-width: 22ch;
    margin: 0;
    font-weight: normal;
    font-family: 'Good Sans', sans-serif;
  }

  @media only screen and ${device.sm} {
    font-weight: 400;
    font-size: 56.3999px;
    line-height: 68px;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Question = () => {
  return (
    <>
      <StyledCardContainer>
        <StyledCard className="question-card">
          <p>Hvordan kan vi skape gode boliger og møteplasser i Andøy?</p>
        </StyledCard>
      </StyledCardContainer>
    </>
  );
};

export default Question;
