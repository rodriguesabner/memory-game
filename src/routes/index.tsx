import {createBrowserRouter} from "react-router-dom";
import Root from "../Root.tsx";
import Login from "../pages/Login";
import Game from "../pages/Game";
import EndGame from "../pages/EndGame";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/game",
                element: <Game/>
            },
            {
                path: "/end-game",
                element: <EndGame/>
            },
        ],
    },
])

export default router;
