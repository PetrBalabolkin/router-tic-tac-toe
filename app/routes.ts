import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("game", "./routes/game.tsx"),
    route("clicker", "./routes/clicker.tsx")
] satisfies RouteConfig;
