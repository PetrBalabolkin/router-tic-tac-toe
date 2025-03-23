"use client"

const Square = ({ value, onSquareClick}) => {
    return (
        <>
            <button onClick={onSquareClick} className="w-12 h-12 text-2xl font-bold border -mt-px -ml-px border-gray-400">{value}</button>
        </>
    )
}

export default Square;