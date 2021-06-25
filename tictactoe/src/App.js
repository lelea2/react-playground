import "./styles.css";
import Board from "./components/Board";
import { useState } from "react";
import styled from "styled-components";

const USER_X = "X";
const USER_O = "O";

const ResetButton = styled.button`
  border: 1px solid #000;
  background: #cdcdcd;
  padding: 20px;
  cursor: pointer;
`;

const Div = styled.div`
  text-align: center;
  width: 650px;
  margin-top: 10px;
`;

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const flattenBoard = board.reduce((acc, item) => {
    return acc.concat(...item);
  }, []);

  const remainSquare = flattenBoard.filter((item) => item === "");

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      !!flattenBoard[a] &&
      (flattenBoard[a] === flattenBoard[b]) &
        (flattenBoard[a] === flattenBoard[c])
    ) {
      return {
        winner: flattenBoard[a],
        draw: false
      };
    }
  }
  return {
    winner: null,
    draw: remainSquare.length === 0
  };
};

export default function App() {
  const boardMap = [
    new Array(3).fill(""),
    new Array(3).fill(""),
    new Array(3).fill("")
  ];

  const [board, setBoard] = useState(boardMap);
  const [user, setUser] = useState(USER_X);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (i, j) => {
    const boardCopy = [...board];
    if (boardCopy[i][j] === "") {
      boardCopy[i][j] = user;
      setBoard(boardCopy);
      const { winner: currWinner, draw } = calculateWinner(boardCopy);
      if (currWinner) {
        setWinner(currWinner);
      } else if (draw) {
        setWinner("-");
      } else {
        setUser(user === USER_X ? USER_O : USER_X);
      }
    }
  };

  const resetBoard = () => {
    setBoard(boardMap);
    setUser(USER_X);
    setWinner(null);
  };

  return (
    <>
      <Board
        board={board}
        hasWinner={!!winner}
        handleSquareClick={handleSquareClick}
      />
      <Div>
        <p>
          {!!winner
            ? winner === "-"
              ? `It's a draw`
              : `${winner} wins!!!`
            : `It's ${user}'s turn`}
        </p>
        <ResetButton onClick={resetBoard}>New game</ResetButton>
      </Div>
    </>
  );
}
