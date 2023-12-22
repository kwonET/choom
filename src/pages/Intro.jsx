import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SlideComponent from "../components/SlideComponent";
import styled, { css } from "styled-components";
import { useState } from "react";
const Intro = () => {
  const [select, setSelect] = useState([]);
  const [emotion, setEmotion] = useState("");
  const [selectObj, setSelectObj] = useState({});
  const navigate = useNavigate();

  const handleClick = (opt) => {
    if (select.includes(opt)) {
      const newArr = select.filter((ele) => ele !== opt);
      setSelect(newArr);
    } else {
      setSelect([...select, opt]);
    }
  };
  const isInSelect = (opt) => {
    return select.includes(opt);
  };
  const handleEmotion = (emo) => {
    setEmotion(emo);
  };
  useEffect(() => {
    setSelectObj({ emotion, select });
  }, [emotion, select]);

  const handleNext = () => {
    navigate(`/intro2`);
    const objString = JSON.stringify(selectObj);
    window.localStorage.setItem("lay", objString);
  };
  return (
    <Wrapper>
      {/* <SlideComponent /> */}
      <Section>
        {" "}
        <Text>나는 오늘</Text>
        <ContentContainer>
          <Content margin={0} onClick={() => handleClick(1)}>
            {isInSelect(1) ? <Cover1 /> : <></>}
            <Video autoPlay loop muted width="400">
              <source src="video/5K7A0067.mp4" type="video/mp4" />
            </Video>
            <Caption>엎드려</Caption>
          </Content>
          <Content margin={320} onClick={() => handleClick(2)}>
            {isInSelect(2) ? <Cover2 /> : <></>}
            <Video autoPlay loop muted width="400">
              <source src="video/5K7A0066.mp4" type="video/mp4" />
            </Video>
            <Caption>앞을 보고 정자세로</Caption>
          </Content>
          <Content margin={640} onClick={() => handleClick(3)}>
            {isInSelect(3) ? <Cover3 /> : <></>}
            <Video autoPlay loop muted width="400">
              <source src="video/5K7A0068.mp4" type="video/mp4" />
            </Video>
            <Caption>등을 말아 웅크려</Caption>
          </Content>
        </ContentContainer>
        <BottomText>누웠다.</BottomText>
      </Section>
      <TextSection>
        그때 나의 기분은
        <TextContainer onClick={() => handleEmotion("angry")}>
          {emotion === "angry" ? <TextE /> : <></>}
          <Text> 화남</Text>
        </TextContainer>{" "}
        |
        <TextContainer onClick={() => handleEmotion("sad")}>
          {emotion === "sad" ? <TextE /> : <></>}
          <Text>슬픔</Text>
        </TextContainer>{" "}
        |
        <TextContainer onClick={() => handleEmotion("happy")}>
          {emotion === "happy" ? <TextE /> : <></>}
          <Text>행복</Text>
        </TextContainer>
        에 가까웠다.
      </TextSection>
      <ButtonSection>
        <NextButton onClick={handleNext}>다음으로</NextButton>
      </ButtonSection>
    </Wrapper>
  );
};

export default Intro;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const Section = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: -30px; */
`;
const TextSection = styled.div`
  width: 900px;

  display: flex;
  height: 1rem;
  letter-spacing: 1.5rem;
`;
const Text = styled.span`
  height: 1rem;
  letter-spacing: 1.5rem;
`;
const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const TextE = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 102, 0.5); /* 반투명한 검은 배경 */
`;
const BottomText = styled.span`
  display: flex;
  align-items: flex-end;
  letter-spacing: 1.5rem;
`;
const ContentContainer = styled.div`
  padding: 10px;
`;
const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-left: ${(props) => `${props.margin}px`};
  cursor: pointer;
`;
const Caption = styled.span`
  height: 1rem;
  font-size: 15px;
  letter-spacing: 1.5rem;
`;
const ButtonSection = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const NextButton = styled.div`
  /* margin: 10px; */
  width: 159px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("ellipse.svg");
  background-size: 150px;
  background-repeat: no-repeat;
  letter-spacing: 1.3rem;
  font-size: 15px;
  cursor: pointer;
`;
const Video = styled.video``;
const Cover1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: rgba(0, 123, 255, 0.5); /* 반투명한 검은 배경 */
  z-index: 1; /* 다른 요소 위에 놓이도록 설정 */
`;
const Cover2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: rgba(0, 255, 204, 0.5); /* 반투명한 검은 배경 */
  z-index: 1; /* 다른 요소 위에 놓이도록 설정 */
`;
const Cover3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: rgba(157, 255, 0, 0.5); /* 반투명한 검은 배경 */
  z-index: 1; /* 다른 요소 위에 놓이도록 설정 */
`;
