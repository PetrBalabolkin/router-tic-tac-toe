"use client"

const Button = ({count, setCount}) => {
    return (
        <button className="py-3 px-10 rounded-xl bg-orange-400 text-white"
                onClick={() => setCount(count + 1)}>+1</button>
    )
}

export default Button;