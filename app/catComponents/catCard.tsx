"use client"

import {Button, Input} from "@headlessui/react";

interface catCardProps {
    code: number;
    attempts: number;
    feedback: string;
    inputValue: string;
    setInputValue: (value: string) => void;
    guess(): void
}

const catCard = (props: catCardProps) => {
    return (
        <div className="flex flex-col gap-5 w-100 h-95 bg-orange-100 px-6 py-6 rounded-3xl">
            <div className="relative overflow-hidden rounded-xl">
                <img src={`https://http.cat/${props.code}.jpg`} alt={`HTTP Cat ${props.code}`}
                     className="scale-[140%] object-cover object-center"/>
            </div>
            <div className="flex justify-between gap-4">
                <Input type="number"
                       value={props.inputValue}
                       onChange={(e) => props.setInputValue(e.target.value)}
                       className="border rounded-xl text-xl w-62 px-4 py-2 data-[hover]:border-amber-500 data-[focus]:outline-none data-[focus]:border-amber-500"
                />
                <Button
                    onClick={() => { props.guess() }}
                    className="bg-white px-5 rounded-xl hover:cursor-pointer hover:bg-amber-500 hover:text-white transition">
                    Check
                </Button>
            </div>
            <div className="flex justify-between text-sm">
                <p>
                    Attempts left: { props.attempts }
                </p>
                <p>
                    {props.feedback}
                </p>
            </div>
        </div>
    )
}

export default catCard;