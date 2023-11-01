import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import store from "./store";
import {ThemeProvider} from "styled-components";
import light from "./styles/themes/light.tsx";

function App() {

    return (
        <Provider store={store}>
            <div className={'App'}>
                <ThemeProvider theme={light}>
                    <GlobalStyles/>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </div>
        </Provider>
    )
}

export default App
