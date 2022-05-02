import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 1000px;
  width: 1000px;
  background-color: coral;
`;

const AppAward = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: Lime;
  img {
    height: 1000px;
    width: 1000px;
    z-index: 10000;
  }
`;

function Section() {
  return (
    <Container>
      <AppAward>
        <img src="./img/img-02-triple@3x.png" alt="" />
      </AppAward>
    </Container>
  );
}

export default Section;
