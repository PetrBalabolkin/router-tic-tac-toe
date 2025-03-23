"use client"
import {useState} from "react";
// @ts-ignore
import Header from "~/components/header";
import Button from "~/components/button";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Clicker" },
        { name: "description", content: "Game to React Router!" },
    ];
}

export default function Clicker() {
    const[count, setCount] = useState<number>(0);

    return (
        <>
            <Header />
            <div className="flex flex-col w-full items-center justify-center h-160 gap-5">
                <div>The actual count is {count}</div>
                <Button count={count} setCount={setCount} />
            </div>
        </>
    )
}