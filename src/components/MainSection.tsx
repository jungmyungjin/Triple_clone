import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0px;
  width: 100%;
  height: 54em;
  display: flex;
  justify-content: center;
  background-image: url("./img/img-01-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 54em;
`;

const ContentsLayer = styled.div`
  display: flex;
  /* background-color: blanchedalmond; */
  width: 1040px;
  height: 800px;
  box-sizing: border-box;
  position: absolute;
  top: 2em;
  flex-direction: row;
  padding: 12em 0px;
  justify-content: space-between;
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
  }
  /* z-index: 10; */
`;

const MainHeader = styled.div`
  flex-direction: column;
  height: 246px;
`;

const MainTitle = styled.span`
  font-size: 5.5em;
  display: flex;
  font-family: sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.lightBgTextColor};
  letter-spacing: 0.8px;
  line-height: 1.1em;
  height: 2.5em;
  /* background-color: aqua; */
  white-space: pre-wrap;
`;
const SubTitle = styled.span`
  font-family: sans-serif;
  letter-spacing: 0px;
  font-weight: 500;
  color: ${(props) => props.theme.lightBgTextColor};
  /* background-color: darkorange; */
  padding-top: 1px;
`;

const SubLayer = styled.div`
  box-sizing: border-box;
  align-items: center;
`;

const SublayerPhone = styled.div`
  background-color: #fafafa;
  width: 330px;
  height: 680px;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  z-index: 9;
  align-items: center;
  font-size: 1em;
  img {
    border-radius: 48px;
    width: 300px;
    height: 650px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px,
    rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
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
          <SublayerPhone>
            <img src="./img/img_01_screen.png" alt="main_phone_img" />
          </SublayerPhone>
        </SubLayer>
      </ContentsLayer>
    </Container>
  );
}

export default MainSection;
