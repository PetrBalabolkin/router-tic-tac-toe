"use client"
import Board from "~/gameComponents/board";
import {useState} from "react";
// @ts-ignore
import Header from "~/components/header";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tic Tac Toe" },
    { name: "description", content: "Game to React Router!" },
  ];
}

export default function Game() {
  const [isXNext, setXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares :any) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXNext(!isXNext);
  }

  const jumpTo = (nextMove :any) => {
    setCurrentMove(nextMove);
    setXNext(nextMove % 2 === 0);
  }

  const moves = history.map((currentSquares, move) => {
    let desc;
    if (move > 0) {
      desc = 'Go to step ' + move;
    } else {
      desc = 'Go to start'
    }
    return(
        <li key={move}  >
          <button
              onClick={() => jumpTo(move)}
              className="border border-amber-500 rounded px-5 py-2 mb-2"
          >{ desc }</button>
        </li>
    )
  });

  return (
      <>
        <Header />
        <div className="flex w-full items-center justify-center h-160 gap-5">
          <div>
            <Board xIsNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div>
            <ol>{moves}</ol>
          </div>
        </div>
      </>
  );
}

