import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 250,
    },
});

const Page = (props:any) => {
    const classes = useStyles();
    const {data} = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Cuentas</TableCell>
                        <TableCell align="right">Importes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row:any) => (
                        <TableRow key={row.account}>
                            <TableCell component="th" scope="row">
                                {row.account}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


export default Page