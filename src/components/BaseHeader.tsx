import styled from "styled-components";
import { Link } from "react-router-dom";
import Triple from "./Triple";

const Container = styled.div`
  box-sizing: border-box;
  /* background-color: black; */
  color: white;
  z-index: 1000;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: flex-end;

  font-family: sans-serif;
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
  img {
    height: 24px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const Booking = styled.span`
  /* background-color: bisque; */
  font-weight: bold;
  font-size: 1em;
  a {
    text-decoration: none;
    color: white;
  }
`;

function BaseHeader() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src="./img/img-main-logo-white@3x.png" alt="logo" />
        </Link>
      </Logo>
      <Booking>
        <Link to="/bookinkg">내 예약</Link>
      </Booking>
    </Container>
  );
}

export default BaseHeader;
