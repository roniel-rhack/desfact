import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {indigo, blue, red} from "@material-ui/core/colors";

// A custom theme for this app
const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: indigo,
        secondary: blue,
        warning: red,
        type:"dark"
    },
}));

export default theme;