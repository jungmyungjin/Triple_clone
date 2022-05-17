import styled from "styled-components";
import Phone from "./Phone";
import { BrowserRouter } from "react-router-dom";
import {
  AnimationSlideUp,
  AnimationSlideDown,
  AnimationShow,
} from "./AnimationSlideUp";

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
const StyledHeading = styled.h2`
  display: inline-block;
  /* background-color: beige; */
  position: relative;
  font-size: 52px;
  line-height: 68px;
  top: 140px;
  opacity: 0;
  animation: ${AnimationSlideUp} 0.8s ease-in-out 1 forwards;
`;

const StyledSubHeading = styled.div`
  /* background-color: blueviolet; */
  font-size: 17px;
  line-height: 30px;
  letter-spacing: -0.283333px;
  position: relative;
  top: 170px;
  opacity: 0;
  animation: ${AnimationSlideUp} 0.8s ease-in-out 0.08s 1 forwards;
`;

const StyledPhones = styled.div`
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
  opacity: 0;
  animation: ${AnimationSlideUp} 0.8s ease-in-out 0.1s 1 forwards;
`;

function SectionThree() {
  return (
    <StyledContainer>
      <StyledContents>
        <StyledHeading>
          모든 예약을
          <br />
          최저가로 한 번에!
        </StyledHeading>

        <StyledSubHeading>
          항공권부터 숙소, 투어·티켓까지 최저가로 예약.
          <br />
          트리플 전용 특가는 보너스.
        </StyledSubHeading>
        <StyledPhones>
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
    </StyledContainer>
  );
}

export default SectionThree;
