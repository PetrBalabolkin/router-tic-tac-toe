import type { Route } from "./+types/home";
import Header from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router App" },
    { name: "description", content: "Game to React Router!" },
  ];
}

export default function Home() {
  return (
      <>
        <Header />
        <div className="flex items-center justify-center h-160">
          <h1 className="text-3xl font-bold">
            Welcome to React Router App
          </h1>
        </div>
      </>
  )
}
