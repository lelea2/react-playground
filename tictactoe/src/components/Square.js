import styled, { css } from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 30px;
  ${(props) =>
    props.active &&
    css`
      background: red;
    `}
`;
const Square = ({ square, hasWinner, handleSquareClick }) => {
  return (
    <Button disabled={!!square || hasWinner} onClick={handleSquareClick}>
      {square}
    </Button>
  );
};

export default Square;
