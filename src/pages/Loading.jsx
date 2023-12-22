import React from "react";
import styled from "styled-components";
import SlideComponent from "../components/SlideComponent";

function Loading(props) {
  return (
    <Wrapper>
      <Back src="frame.svg" alt="프레임" />
      <Name>가상극장으로 입장하고 있습니다.</Name>
      <Title>당신의 춤을 감상해주세요.</Title>
    </Wrapper>
  );
}

export default Loading;
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
  margin-top: 150px;
  margin-right: 210px;
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
