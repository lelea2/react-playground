import styled from "styled-components";
import Square from "./Square";

const Div = styled.div`
  width: 650px;
  border: 2px solid #000;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
`;

const SquareDiv = styled.div`
  flex: 1 0 33%;
`;

const Board = ({ board, hasWinner, handleSquareClick }) => {
  return (
    <Div>
      {board.map((row, i) => {
        return row.map((square, j) => {
          return (
            <SquareDiv key={`${i}${j}`}>
              <Square
                hasWinner={hasWinner}
                square={square}
                handleSquareClick={() => handleSquareClick(i, j)}
              />
            </SquareDiv>
          );
        });
      })}
    </Div>
  );
};

export default Board;
