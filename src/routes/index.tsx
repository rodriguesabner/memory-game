import {createBrowserRouter} from "react-router-dom";
import Root from "../Root.tsx";
import Login from "../pages/Login";
import Game from "../pages/Game";

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
        ],
    },
])

export default router;
