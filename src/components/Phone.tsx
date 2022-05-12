import styled, { CSSProp } from "styled-components";

interface IPhone {
  height: number;
  width: number;
  imgSrc: string;
}

interface IStyleComponentsPhone {
  height: number;
  width: number;
}

const StyleComponentsPhone = styled.div<IStyleComponentsPhone>`
  position: relative;
  background-color: #fafafa;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    border-radius: 48px;
    width: ${(props) => `${props.width - 30}px`};
    height: ${(props) => `${props.height - 30}px`};
    background-repeat: no-repeat;
    background-size: contain;
  }
  box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px,
    rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
`;

const StylePhoneFrame = styled.div<{
  // left: number;
  width: number;
  height: number;
}>`
  background-color: #fafafa;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: 18px;
  top: 0px;
  margin: 0px;
`;

const StyleSubFrame = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  /* background-color: bisque; */
`;

function Phone({ width, height, imgSrc }: IPhone) {
  console.log(`width ${width}, height ${height}, img ${imgSrc}`);
  return (
    <StyleComponentsPhone width={width} height={height}>
      <StyleSubFrame>
        <StylePhoneFrame
          // left={(width - 60) / 4}
          width={(width - 30) / 2}
          height={34}
        />
      </StyleSubFrame>
      <img src={imgSrc} alt="main_phone_img" />
    </StyleComponentsPhone>
  );
}

export default Phone;
