import styled, { css } from "styled-components";
import handleViewport from "react-in-viewport";
import { AnimationSlideUp } from "./AnimationSlideUp";
import CountUp from "react-countup";

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
const AwardImg = styled.div<{
  showUp: boolean;
}>`
  /* box-sizing: border-box; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 412px;
  width: 400px;
  /* background-color: Lime; */
  margin-right: 100px;
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationSlideUp} 0.5s ease-in-out forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
      animation: none;
    `}
  figure {
    /* margin: 0; */
    line-height: 0;
    position: relative;
    figcaption {
      position: absolute;
      top: 280px;
      text-align: center;
      color: rgba(58, 58, 58, 0.7);
      /* line-height: 1; */
      left: 0;
      right: 0;
      bottom: 0;
    }
    img {
      height: 338px;
      width: 400px;
      /* z-index: 1000; */
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
const Description = styled.div<{
  showUp: boolean;
}>`
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
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationSlideUp} 0.5s ease-in-out 0.3s 1 forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
      animation: none;
    `}
`;
const Award = styled.div<{
  showUp: boolean;
}>`
  /* background-color: cyan; */
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  line-height: 22px;

  ${({ showUp }) =>
    showUp === true &&
    css`
      animation: ${AnimationSlideUp} 0.5s ease-in-out 0.5s 1 forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
    `}

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

const Block = (props: {
  inViewport: boolean;
  forwardedRef: any;
  enterCount: number;
}) => {
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef}>
        <div className="container">
          <AppAward>
            <AwardImg showUp={true}>
              <figure>
                <img src="./img/img-02-triple@3x.png" alt="" />
                <figcaption>2021년 12월 기준</figcaption>
              </figure>
            </AwardImg>
            <AwardDescription>
              <Description showUp={true}>
                <ul>
                  <li>
                    <strong>
                      <CountUp start={600} end={700} />만 명
                    </strong>
                    <span>의 여행자</span>
                  </li>
                  <li>
                    <strong>
                      <CountUp start={60} end={100} />만 개
                    </strong>
                    <span>의 여행 리뷰</span>
                  </li>
                  <li>
                    <strong>
                      <CountUp start={400} end={470} />
                    </strong>
                    <span>의 여행 일정</span>
                  </li>
                </ul>
              </Description>
              <Award showUp={true}>
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
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef}>
      <div className="container">
        <AppAward>
          <AwardImg showUp={false}>
            <figure>
              <img src="./img/img-02-triple@3x.png" alt="" />
              <figcaption>2021년 12월 기준</figcaption>
            </figure>
          </AwardImg>
          <AwardDescription>
            <Description showUp={false}>
              <ul>
                <li>
                  <strong>700 만 명</strong>
                  <span>의 여행자</span>
                </li>
                <li>
                  <strong>100 만 개</strong>
                  <span>의 여행 리뷰</span>
                </li>
                <li>
                  <strong>470 만 개</strong>
                  <span>470 의 여행일정</span>
                </li>
              </ul>
            </Description>
            <Award showUp={false}>
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
      </div>
    </div>
  );
};

function SectionTwo() {
  const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

  return (
    <Container>
      <ViewportBlock
        onEnterViewport={() => {
          console.log("2 Enter");
        }}
        onLeaveViewport={() => {
          console.log("2 leave");
        }}
      />
    </Container>
  );
}

export default SectionTwo;
