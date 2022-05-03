import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 552px;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const AppAward = styled.div`
  /* background-color: #ed1eed; */
  display: flex;
  width: 1040px;
  height: 412px;
  justify-content: center;
`;
const AwardImg = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 412px;
  width: 400px;
  /* background-color: Lime; */
  margin-right: 100px;
  figure {
    margin: 0;
    line-height: 0;
    position: relative;
    figcaption {
      position: absolute;
      top: 280px;
      text-align: center;
      color: rgba(58, 58, 58, 0.7);
      line-height: 1;
      left: 0;
      right: 0;
      bottom: 0;
    }
    img {
      height: 338px;
      width: 400px;
      z-index: 1000;
    }
  }
`;

const AwardDescription = styled.div`
  /* background-color: lavender; */
  height: 412px;
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 100px;
`;
const Discription = styled.div`
  /* background-color: blanchedalmond; */
  height: 220px;
  display: flex;
  align-items: center;
  li {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
  strong {
    font-weight: bold;
  }
`;
const Award = styled.div`
  /* background-color: cyan; */
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  line-height: 22px;

  div {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 10px;
    width: 54px;
    height: 54px;
  }
`;

function Section() {
  return (
    <Container>
      <AppAward>
        <AwardImg>
          <figure>
            <img src="./img/img-02-triple@3x.png" alt="" />
            <figcaption>2021년 12월 기준</figcaption>
          </figure>
        </AwardImg>
        <AwardDescription>
          <Discription>
            <ul>
              <li>
                <strong>700만 명</strong>
                <span>의 여행자</span>
              </li>
              <li>
                <strong>100만 개</strong>
                <span>의 여행자</span>
              </li>
              <li>
                <strong>470만 개</strong>
                <span>의 여행자</span>
              </li>
            </ul>
          </Discription>
          <Award>
            <div>
              <img src="./img/img-02-badge-google@3x.png" alt="" />
              <ul>
                <li>
                  <span>2018 구글 플레이스토어</span>
                </li>
                <li>
                  <span>올해의 앱 최우수 수상</span>
                </li>
              </ul>
            </div>
            <div>
              <img src="./img/img-02-badge-apple@4x.png" alt="" />
              <ul>
                <li>
                  <span>2018 애플 앱스토어</span>
                </li>
                <li>
                  <span>오늘의 여행앱 선정</span>
                </li>
              </ul>
            </div>
          </Award>
        </AwardDescription>
      </AppAward>
    </Container>
  );
}

export default Section;
