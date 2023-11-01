import {RouterProvider} from "react-router-dom";
import router from "./routes";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import light from "./styles/themes/light.tsx";

function App() {

    return (
        <div className={'App'}>
            <ThemeProvider theme={light}>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </div>
    )
}

export default App
