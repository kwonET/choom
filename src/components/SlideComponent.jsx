import React from "react";
import styled, { keyframes } from "styled-components";

const SlideComponent = () => {
  return (
    <Wrapper>
      <SliderContainer>
        <SliderContent>
          <Text>
            오늘 당신의 몸의 궤적을 떠올려보세요 . 어떤 움직임이 있었나요 ?
            그리고 그때의 감정은 어떠했나요 ?
          </Text>
          <Text>
            오늘 당신의 몸의 궤적을 떠올려보세요. 어떤 움직임이 있었나요 ?
            그리고 그때의 감정은 어떠했나요 ?
          </Text>
        </SliderContent>
      </SliderContainer>
    </Wrapper>
  );
};

export default SlideComponent;
const Wrapper = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 1rem;
  overflow: hidden; /* 넘치는 부분은 숨김 처리 */
  white-space: nowrap; /* 텍스트가 넘치면 줄 바꿈 방지 */
  position: relative;
`;
const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const SliderContent = styled.div`
  display: flex;
  animation: ${slideAnimation} 20s linear infinite;
`;

const Text = styled.span`
  /* padding: 10px; */
  letter-spacing: 1.5rem;
`;
