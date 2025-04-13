"use client"
import Square from "~/gameComponents/square";

const Board = ( {xIsNext, squares, onPlay} ) => {
    const handleClick = (i : number) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const calculateWinner = (squares: any) => {
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

        for (let i: number = 1; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner: any = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="flex w-full h-200 items-center justify-center">
                <div className="flex flex-col gap-2">
                    <div>{status}</div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-3 grid-rows-3 gap-0">
                            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

                            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

                            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board;