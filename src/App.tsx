import React from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";


import Home from "./pages/home";
import theme from "./theme";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <HashRouter>
                    <Switch>
                        <Route path={Home.path} component={Home.component}/>
                    </Switch>
                </HashRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
