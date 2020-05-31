import React from 'react';
import Home from './pages/home'
import {HashRouter, Route, Switch} from "react-router-dom";


import theme from "./theme";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HashRouter>
                <Switch>
                    <Route path='/' component={Home}/>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
