import React from "react";
import {Fab} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                position: 'absolute',
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },

    }),
);

const Page = (props: any) => {
    const classes = useStyles();
    const {handleClick} = props;
    return(
        <div className={classes.root}>
            <Fab color="primary" aria-label="save" onClick={handleClick}>
                <SaveIcon />
            </Fab>
        </div>
    )
};

export default Page