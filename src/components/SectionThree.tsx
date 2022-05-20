import styled, { css } from "styled-components";
import handleViewport from "react-in-viewport";
import Phone from "./Phone";
import { AnimationSlideUp } from "./AnimationSlideUp";

const StyledContainer = styled.div`
  position: relative;
  background-color: rgb(250, 250, 250);
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const StyledContents = styled.div`
  position: relative;
  /* background-color: black; */
  width: 1040px;
  height: 1000px;
  font-family: sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(58, 58, 58);
  text-align: center;
  margin: 0px;
`;
const StyledHeading = styled.h2<{
  showUp: boolean;
}>`
  display: inline-block;
  /* background-color: beige; */
  position: relative;
  font-size: 52px;
  line-height: 68px;
  top: 140px;

  ${({ showUp }) =>
    showUp === true &&
    css`
      animation: ${AnimationSlideUp} 0.8s ease-in-out 1 forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
    `}
`;

const StyledSubHeading = styled.div<{
  showUp: boolean;
}>`
  /* background-color: blueviolet; */
  font-size: 17px;
  line-height: 30px;
  letter-spacing: -0.283333px;
  position: relative;
  top: 170px;
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationSlideUp} 0.8s ease-in-out 0.08s 1 forwards;
    `}
  ${({ showUp }) =>
    showUp === false &&
    css`
      opacity: 1;
      animation: none;
    `}
`;

const StyledPhones = styled.div<{
  showUp: boolean;
}>`
  position: absolute;
  bottom: -40px;
  width: 100%;
  /* background-color: coral; */
  display: flex;
  justify-content: center;
  & div {
    margin: 0px 10px;
    /* background-color: aqua; */
  }
  ${({ showUp }) =>
    showUp === true &&
    css`
      opacity: 0;
      animation: ${AnimationSlideUp} 0.8s ease-in-out 0.1s 1 forwards;
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
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef}>
        <div className="container">
          <StyledContents>
            <StyledHeading showUp={true}>
              모든 예약을
              <br />
              최저가로 한 번에!
            </StyledHeading>
            <StyledSubHeading showUp={true}>
              항공권부터 숙소, 투어·티켓까지 최저가로 예약.
              <br />
              트리플 전용 특가는 보너스.
            </StyledSubHeading>
            <StyledPhones showUp={true}>
              <Phone
                width={290}
                height={598}
                imgSrc={"./img/img-07-screen-1.png"}
              />
              <Phone
                width={290}
                height={598}
                imgSrc={"./img/img_07_screen_2.png"}
              />
              <Phone
                width={290}
                height={598}
                imgSrc={"./img/img_07_screen_3.png"}
              />
            </StyledPhones>
          </StyledContents>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef}>
      <div className="container">
        <StyledContents>
          <StyledHeading showUp={false}>
            모든 예약을
            <br />
            최저가로 한 번에!
          </StyledHeading>
          <StyledSubHeading showUp={false}>
            항공권부터 숙소, 투어·티켓까지 최저가로 예약.
            <br />
            트리플 전용 특가는 보너스.
          </StyledSubHeading>
          <StyledPhones showUp={false}>
            <Phone
              width={290}
              height={598}
              imgSrc={"./img/img-07-screen-1.png"}
            />
            <Phone
              width={290}
              height={598}
              imgSrc={"./img/img_07_screen_2.png"}
            />
            <Phone
              width={290}
              height={598}
              imgSrc={"./img/img_07_screen_3.png"}
            />
          </StyledPhones>
        </StyledContents>
      </div>
    </div>
  );
};

function SectionThree() {
  const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);
  return (
    <StyledContainer>
      <ViewportBlock
        onEnterViewport={() => {
          console.log("3 Enter");
        }}
        onLeaveViewport={() => {
          console.log("3 leave");
        }}
      />
    </StyledContainer>
  );
}

export default SectionThree;
