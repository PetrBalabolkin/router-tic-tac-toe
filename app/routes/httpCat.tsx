import Header from "~/components/header";
import CatCard from "~/catComponents/catCard"
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "~/store";
import {useEffect, useState} from "react";
import {resetGame, guess as guessAction} from "~/slices/httpCatSlice";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Http Cats" },
        { name: "description", content: "Game to React Router!" },
    ];
}

export default function httpCat() {
    const dispatch = useDispatch();
    const { code, attempts, feedback, status } = useSelector((state: RootState) => state.httpCat)

    const [inputValue, setInputValue] = useState("");
    const [guess, setGuess] = useState<boolean>(false);

    useEffect(() => {
        if (status === 'correct' || status === 'failed') {
            const timer = setTimeout(() => {
                dispatch(resetGame());
                setGuess(false);
                setInputValue("");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [status, dispatch]);

    const handleClick = () => {
        if (status !== 'playing'){
            return;
        }
        dispatch(guessAction(inputValue));
    }

    return (
        <>
            <Header />
            <div className="w-full h-screen flex justify-center items-center" >
                <CatCard code={code} attempts={attempts} feedback={feedback} inputValue={inputValue} setInputValue={setInputValue} guess={handleClick}/>
            </div>
        </>
    )
}