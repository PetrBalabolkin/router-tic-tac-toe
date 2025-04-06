"use client"
// @ts-ignore
import Header from "~/components/header";
import Button from "~/components/button";
import type {Route} from "../../.react-router/types/app/routes/+types/home";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import type {RootState} from "~/store";
import {increment} from "~/slices/clickerSlice";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Clicker" },
        { name: "description", content: "Game to React Router!" },
    ];
}

export default function Clicker() {
    const count = useSelector((state: RootState) => state.clicker.value);
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <div className="flex flex-col w-full items-center justify-center h-160 gap-5">
                <div>The actual count is {count}</div>
                <Button setCount={() => dispatch(increment())} />
            </div>
        </>
    )
}