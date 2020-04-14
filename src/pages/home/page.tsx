import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AddRow from "../../components/addRow";
import ShowInfo from "../../components/showInfo";
import SaveDBF from "../../components/saveDBF";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        addRow:{
            minWidth: 300,
            maxWidth: 600
        },
        showInfo:{
            minWidth: 260,
            maxWidth: 450
        }

    }),
);
const Page = (props: any) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs className={classes.addRow}>
                    <Paper className={classes.paper}>
                        <AddRow/>
                    </Paper>
                </Grid>
                <Grid item xs className={classes.showInfo}>
                    <Paper className={classes.paper}>
                        <ShowInfo/>
                    </Paper>
                </Grid>
            </Grid>

                    <SaveDBF/>


        </div>
    )
};

export default Page