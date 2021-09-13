import styled from "styled-components";

const StrawberryDiv = styled.div`
  position: relative;
  border-radius: 62% 54% 24% 70% / 68% 64% 20% 46%;
  border: 2px solid black;
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shawdow = styled.div`
  position: absolute;
  border-radius: 62% 54% 24% 70% / 68% 64% 20% 46%;
  width: 100%;
  height: 100%;
  border-bottom: ${(props) => `10px solid ${props.color}`};
  opacity: 0.7;
  bottom: 0px;
`;

export default function Strawberry({ color }) {
  return (
    <div className="playground">
      <StrawberryDiv color={color}>
        <div className="seeds">
          <div className="row row-1">
            <div className="seed"></div>
            <div className="seed"></div>
            <div className="seed"></div>
          </div>
          <div className="row row-2">
            <div className="seed"></div>
            <div className="seed"></div>
            <div className="seed"></div>
          </div>
          <div className="row row-3">
            <div className="seed"></div>
            <div className="seed"></div>
            <div className="seed"></div>
          </div>
          <div className="row">
            <div className="seed"></div>
          </div>
        </div>
        <Shawdow />
        <div className="shine"></div>
        <div className="leaf-1 leaf"></div>
        <div className="leaf-2 leaf">
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <div className="leaf leaf-3 leaf-2">
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <div className="leaf leaf-4 leaf-2">
          <div className="right"></div>
          <div className="left"></div>
        </div>
        <div className="outside-shadow"></div>
        <div className="stalk"></div>
      </StrawberryDiv>
    </div>
  );
}
