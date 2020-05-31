import React, {FC, useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core/SvgIcon/SvgIcon";
import {FieldAttributes} from "formik";
import Zoom from "@material-ui/core/Zoom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface iProps extends FieldAttributes<any> {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {},
    })
);

const FabIcon: FC<iProps> = (props: iProps) => {
    const classes = useStyles();
    const [demoTip, setDemoTip] = useState(true);
    setTimeout(() => {
        setDemoTip(false)
    }, 3500)
    return (
        <Tooltip open={demoTip} title={props.title} TransitionComponent={Zoom}>
            <Tooltip title={props.title} arrow={true} TransitionComponent={demoTip ? undefined : Zoom}>
                <Fab size="medium" color="primary" {...props} title={undefined}>
                    <props.icon className={classes.icon}/>
                </Fab>
            </Tooltip>
        </Tooltip>
    )
}

export default FabIcon;