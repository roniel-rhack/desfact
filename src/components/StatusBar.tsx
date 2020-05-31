import {desgloseInterface} from "../utils/desgloseDefault";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import React from "react";
import sumaImporte from "../utils/sumaImporte";
import Typography from "@material-ui/core/Typography";

export interface iProps {
    desgloses: desgloseInterface[]
    fileName: string;
}

const StatusBar = (props: iProps) => {

    return (
        <Paper style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            textAlign: "left",
            width: '100%',
            boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.55)",
            paddingTop: 10,
            paddingBottom: 10,
        }}>
            <Container style={{display: 'inline-flex', width: 'calc(100% - 175px)'}}>
                <Typography> IMPORTE TOTAL: $ {(sumaImporte(props.desgloses)).toFixed(2)}</Typography>
                {/*<Typography style={{marginLeft: "auto"}}>{`${props.fileName}.dbf`}</Typography>*/}
            </Container>
        </Paper>
    );
}
export default StatusBar;