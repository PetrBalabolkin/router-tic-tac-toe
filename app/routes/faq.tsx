import Header from "~/components/header";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Faq" },
        { name: "description", content: "Game to React Router!" },
    ];
}

export default function faq() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center gap-7 mt-25">
                <h1 className="font-bold text-4xl">FAQ</h1>
                <div className="flex flex-col justify-center items-center mx-auto gap-5">
                    <Disclosure as="div" className="flex flex-col items-start w-180 bg-orange-50 rounded-xl py-2 px-5">
                        <DisclosureButton className="py-2 text-orange-950">Prečo IT v Kurze je v realite IT v kríze a totálna pičovina?</DisclosureButton>
                        <DisclosurePanel className="text-orange-900 pt-3 pb-3">
                            Lebo oni sú IT v Kríze.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="flex flex-col items-start w-180 bg-orange-50 rounded-xl py-2 px-5">
                        <DisclosureButton className="py-2 text-orange-950">Prečo oni stále klamu?</DisclosureButton>
                        <DisclosurePanel className="text-orange-900 pt-3 pb-3">
                            Lebo oni sú IT v Kríze.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="flex flex-col items-start w-180 bg-orange-50 rounded-xl py-2 px-5">
                        <DisclosureButton className="py-2 text-orange-950">Prečo oni stále existujú?</DisclosureButton>
                        <DisclosurePanel className="text-orange-900 pt-3 pb-3">
                            Vysvetlenie tomu neexistuje. Asi zázrakom.
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </>
    )
}