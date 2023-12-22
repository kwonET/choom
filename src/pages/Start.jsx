import React from "react";
import styled from "styled-components";
import SlideComponent from "../components/SlideComponent";
import { useNavigate } from "react-router-dom";
function Start(props) {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/intro`);
  };
  return (
    <Wrapper>
      {/* <Section>
        <SlideComponent />
      </Section> */}
      <Back src="frame.svg" alt="프레임" />
      <ButtonSection>
        <NextButton onClick={handleNext}>입장</NextButton>
      </ButtonSection>
      <Name>권보미</Name>
      <Title>가상극장에서의 나의 춤</Title>
    </Wrapper>
  );
}

export default Start;
const ButtonSection = styled.div`
  position: fixed;

  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const NextButton = styled.div`
  /* margin: 10px; */
  width: 190px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("ellipse.svg");
  background-size: 180px;
  background-repeat: no-repeat;
  letter-spacing: 1.3rem;
  font-size: 18px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Section = styled.div`
  width: 80%;
  overflow: hidden;
`;
const Name = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 200px;
  margin-right: 230px;
  font-size: 20px;
  letter-spacing: 1.5rem;
  z-index: 1;
`;
const Title = styled.div`
  bottom: 0;
  left: 0;
  margin-bottom: 150px;
  margin-left: 240px;
  position: absolute;
  font-size: 20px;
  letter-spacing: 1.5rem;
  z-index: 1;
`;
const Back = styled.img`
  position: absolute;
`;
