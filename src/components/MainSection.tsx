import styled, { css } from "styled-components";
import Phone from "./Phone";
import {
  AnimationSlideUp,
  AnimationSlideDown,
  AnimationShow,
} from "./AnimationSlideUp";

const Container = styled.div`
  /* top: 0px; */
  width: 100%;
  height: 860px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-image: url("./img/img-01-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const ContentsLayer = styled.div`
  display: flex;
  /* background-color: blanchedalmond; */
  width: 1040px;
  height: 810px;
  margin-top: 50px;
  position: absolute;
  top: 0;
  flex-direction: row;
  padding: 12em 0px;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  transition: opacity 1s ease-out; // animation으로 가능 keyframe
  /* opacity: 0;
  &:hover {
    opacity: 1;
  } */
`;

const MainLayer = styled.div`
  /* background-color: blueviolet; */
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;

  button {
    justify-items: end;
    width: 180px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: ${(props) => props.theme.lightBgTextColor};
    font-family: sans-serif;
    font-weight: bold;
    font-size: medium;
    border: 1px white solid;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.lightBgColor};
      color: ${(props) => props.theme.colorBgTextColor};
    }
    animation: ${AnimationShow} 2s ease;
  }
`;

const MainHeader = styled.div`
  flex-direction: column;
  color: ${(props) => props.theme.lightBgTextColor};
  height: 246px;
`;

const MainTitle = styled.span`
  font-size: 5.5em;
  display: flex;
  font-family: sans-serif; // root level
  font-weight: bold;
  letter-spacing: 0.8px; // 보통 안씀
  line-height: 1.1em; // em 안돼.
  height: 2.5em; // em 절대 안써/
  /* background-color: aqua; */
  white-space: pre-wrap;
  animation: ${AnimationSlideUp} 0.8s ease-in-out;
`;
const SubTitle = styled.span`
  font-family: sans-serif;
  letter-spacing: 0px;
  font-weight: 500; // default 500
  /* background-color: darkorange; */
  padding-top: 1px; // line-hieght 주던가 margin
  animation: ${AnimationShow} 2s 0s ease;
`;

const SubLayer = styled.div`
  height: 800px;
  width: 330px;
  align-items: center;
  /* background-color: bisque; */
  animation: ${AnimationShow} 0.6s 0s ease-in;
`;

function MainSection() {
  const mainText = "여행의 모든 것\n트리플로 한 번에";
  const subText = "예약부터 일정까지 앱 하나로 간편하게 준비하세요.";

  return (
    <Container>
      <ContentsLayer>
        <MainLayer>
          <MainHeader>
            <MainTitle>{mainText}</MainTitle>
            <SubTitle>{subText}</SubTitle>
          </MainHeader>
          <button>앱 설치하기</button>
        </MainLayer>
        <SubLayer>
          <Phone width={330} height={680} imgSrc={"./img/img_01_screen.png"} />
        </SubLayer>
      </ContentsLayer>
    </Container>
  );
}

export default MainSection;
