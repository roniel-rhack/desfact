import React, { Fragment } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import {Button, FormControl, Input, InputAdornment, InputLabel} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        input: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '100%',
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

interface State {
    account: string,
    amount: number,
    valid?: boolean
}

const Page = (props:any) => {
    const classes  = useStyles();
    const {account, amount, handleChange, saveNewRecord} = props;

    return(
        <Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Cuenta:</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    fullWidth
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountBalanceOutlinedIcon />
                        </InputAdornment>
                    }
                    value={account}
                    onChange={handleChange('account')}
                />
            </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Importe:</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                $
                            </InputAdornment>
                        }
                        value={amount}
                        onChange={handleChange('amount')}
                    />
                </FormControl>
                <Button variant="outlined" color="primary" startIcon={<SaveIcon />} onClick={saveNewRecord}>
                    Adicionar
                </Button>
            </form>
        </Fragment>
    );
};

export default Page