import AddIcon from "@material-ui/icons/Add";
import desgloseDefaultValue from "../utils/desgloseDefault";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import fileDialog from "file-dialog";
import loadDbf from "../request/loadDbf";
import SaveIcon from "@material-ui/icons/Save";
import React, {Fragment, useState} from "react";
import {FieldArrayRenderProps, FieldAttributes} from "formik";
import DialogFileName from "./DialogFileName";
import SpeedDial from "@material-ui/lab/SpeedDial";
import Backdrop from "@material-ui/core/Backdrop";
import AppsIcon from '@material-ui/icons/Apps';
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import Alert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";

interface iProps extends FieldAttributes<any> {
    isSubmitting: boolean;
    arrayHelpers: FieldArrayRenderProps;
    handleSubmit: () => void
    fileName: string;

    setFieldValue(field: string, value: any, shouldValidate?: boolean): void
}

const OptionsPanel: React.FC<iProps> = (props: iProps) => {
    const [openSpeedDial, setOpenSpeedDial] = React.useState(false);
    const closeOptions = () => setOpenSpeedDial(false);
    const openOptions = () => setOpenSpeedDial(true);

    const [openDialogName, setOpenDialogName] = useState(false)
    const closeDialog = () => setOpenDialogName(false);
    const openDialog = () => setOpenDialogName(true);

    const [openLoadSuccess, setOpenLoadSuccess] = useState(false)


    const openFile = () => {
        fileDialog({multiple: false})
            .then((file) => {
                // @ts-ignore
                const path = file[0].path;
                const fileName = file[0].name.split('.dbf')[0];
                props.setFieldValue('fileName', fileName)
                loadDbf(path)
                    .then(response => {
                        return response.json()
                    })
                    .then(valueResponse => {
                        props.setFieldValue('desgloses', valueResponse);
                        setOpenLoadSuccess(true);
                    })
                    .catch(reason => {
                        setOpenLoadSuccess(true);
                    });
            })
    }

    return (
        <Fragment>
            <Backdrop open={openSpeedDial} style={{zIndex: 0}}/>
            <SpeedDial open={openSpeedDial} ariaLabel="Opciones" onClose={closeOptions} onOpen={openOptions}
                       icon={<AppsIcon/>} style={{position: "fixed", bottom: 10, right: 10}}>
                <SpeedDialAction
                    icon={<AddIcon/>}
                    tooltipTitle="Agregar"
                    tooltipOpen
                    onClick={() => props.arrayHelpers.push(desgloseDefaultValue())}
                />
                <SpeedDialAction
                    icon={<EditAttributesIcon/>}
                    tooltipTitle="Renombrar"
                    tooltipOpen
                    onClick={openDialog}
                />
                <SpeedDialAction
                    icon={<InsertDriveFileIcon/>}
                    tooltipTitle="Abrir"
                    tooltipOpen
                    onClick={openFile}
                />
                <SpeedDialAction
                    icon={<SaveIcon/>}
                    tooltipTitle="Guardar"
                    tooltipOpen
                    onClick={props.handleSubmit}
                />
            </SpeedDial>
            <Snackbar open={openLoadSuccess} autoHideDuration={10000} onClose={() => setOpenLoadSuccess(false)}>
                <Alert onClose={() => setOpenLoadSuccess(false)} severity="success">
                    ¡Se ha cargado correctamente el archivo!
                </Alert>
            </Snackbar>
            <DialogFileName open={openDialogName} handleClose={closeDialog} fileName={props.fileName}
                            setFieldValue={props.setFieldValue}/>
        </Fragment>
    )
}

export default OptionsPanel;