import styled, { css } from "styled-components";
import handleViewport from "react-in-viewport";
import Phone from "./Phone";
import { AnimationSlideUp, AnimationShow } from "./AnimationSlideUp";

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
`;

const MainLayer = styled.div<{
  showUp: boolean;
}>`
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
    ${({ showUp }) =>
      showUp === true &&
      css`
        animation: ${AnimationShow} 2s ease forwards;
      `}
    ${({ showUp }) =>
      showUp === false &&
      css`
        opacity: 1;
      `}
  }
`;

const MainHeader = styled.div`
  flex-direction: column;
  color: ${(props) => props.theme.lightBgTextColor};
  height: 246px;
`;

const MainTitle = styled.span<{
  showUp: boolean;
}>`
  font-size: 5.5em;
  display: flex;
  font-family: sans-serif; // root level
  font-weight: bold;
  letter-spacing: 0.8px; // 보통 안씀
  line-height: 1.1em; // em 안돼.
  height: 2.5em; // em 절대 안써/
  /* background-color: aqua; */
  white-space: pre-wrap;
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationSlideUp} 0.8s ease-in-out forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
      animation: none;
    `}
`;
const SubTitle = styled.span<{
  showUp: boolean;
}>`
  font-family: sans-serif;
  letter-spacing: 0px;
  font-weight: 500; // default 500
  /* background-color: darkorange; */
  padding-top: 1px; // line-hieght 주던가 margin
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationShow} 2s 0s ease forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
      animation: none;
    `}
`;

const SubLayer = styled.div<{
  showUp: boolean;
}>`
  height: 800px;
  width: 330px;
  align-items: center;
  /* background-color: bisque; */
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationShow} 0.6s 0s ease-in forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
      animation: none;
    `}
`;

const Block = (props: {
  inViewport: boolean;
  forwardedRef: any;
  enterCount: number;
}) => {
  const { inViewport, forwardedRef, enterCount } = props;
  const mainText = "여행의 모든 것\n트리플로 한 번에";
  const subText = "예약부터 일정까지 앱 하나로 간편하게 준비하세요.";

  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef}>
        <div className="container">
          <ContentsLayer>
            <MainLayer showUp={true}>
              <MainHeader>
                <MainTitle showUp={true}>{mainText}</MainTitle>
                <SubTitle showUp={true}>{subText}</SubTitle>
              </MainHeader>
              <button>앱 설치하기</button>
            </MainLayer>
            <SubLayer showUp={true}>
              <Phone
                width={330}
                height={680}
                imgSrc={"./img/img_01_screen.png"}
              />
            </SubLayer>
          </ContentsLayer>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef}>
      <div className="container">
        <ContentsLayer>
          <MainLayer showUp={false}>
            <MainHeader>
              <MainTitle showUp={false}>{mainText}</MainTitle>
              <SubTitle showUp={false}>{subText}</SubTitle>
            </MainHeader>
            <button>앱 설치하기</button>
          </MainLayer>
          <SubLayer showUp={false}>
            <Phone
              width={330}
              height={680}
              imgSrc={"./img/img_01_screen.png"}
            />
          </SubLayer>
        </ContentsLayer>
      </div>
    </div>
  );
};

function MainSection() {
  const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

  return (
    <Container>
      <ContentsLayer>
        <ViewportBlock
          onEnterViewport={() => {
            console.log("1 Enter");
          }}
          onLeaveViewport={() => {
            console.log("1 leave");
          }}
        />
      </ContentsLayer>
    </Container>
  );
}

export default MainSection;
