import styled, { css, keyframes } from "styled-components";
import handleViewport from "react-in-viewport";
import { Link } from "react-router-dom";
import { AnimationCloseUp, AnimationShowDown } from "./AnimationSlideUp";

const Container = styled.div<{
  showUp: boolean;
  enterCount: number;
}>`
  box-sizing: border-box;
  background-color: white;
  color: black;
  z-index: 1000;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
  font-family: sans-serif;
  border-bottom: 1px solid rgb(239, 239, 239);

  ${({ showUp, enterCount }) =>
    showUp === false &&
    enterCount < 2 &&
    css`
      opacity: 0;
    `}
  ${({ showUp, enterCount }) =>
    showUp === true &&
    css`
      animation: ${AnimationShowDown} 0.2s 0s ease-in;
    `}
  ${({ showUp, enterCount }) =>
    enterCount > 1 &&
    showUp === false &&
    css`
      animation: ${AnimationCloseUp} 0.2s 0s ease-in forwards;
    `}
`;

const Logo = styled.span`
  /* background-color: rosybrown; */
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 1.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: rgba(58, 58, 58, 0.8);
  img {
    height: 24px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
const Booking = styled.span`
  /* background-color: bisque; */
  /* font-weight: 200; */
  font-size: 16px;
  a {
    text-decoration: none;
    color: rgba(58, 58, 58, 0.8);
  }
`;
const Block = (props: {
  inViewport: boolean;
  forwardedRef: any;
  enterCount: number;
}) => {
  const { inViewport, forwardedRef, enterCount } = props;
  console.log(`inViewport : ${inViewport}, enterCount : ${enterCount}`);
  if (inViewport === true) {
    return (
      <div ref={forwardedRef}>
        <div className="container">
          <Container showUp={false} enterCount={enterCount}>
            <Logo>
              <Link to="/">
                <img src="./img/img_intro_logo_dark.svg" alt="logo" />
              </Link>
            </Logo>
            <Booking>
              <Link to="/bookinkg">내 예약</Link>
            </Booking>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div ref={forwardedRef}>
        <div className="container">
          <Container showUp={true} enterCount={enterCount}>
            <Logo>
              <Link to="/">
                <img src="./img/img_intro_logo_dark.svg" alt="logo" />
              </Link>
            </Logo>
            <Booking>
              <Link to="/bookinkg">내 예약</Link>
            </Booking>
          </Container>
        </div>
      </div>
    );
  }
};

function PublicHeader() {
  const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

  return (
    <ViewportBlock
      onEnterViewport={() => {
        console.log("header Enter");
      }}
      onLeaveViewport={() => {
        console.log("header leave");
      }}
    />
  );
}

export default PublicHeader;
