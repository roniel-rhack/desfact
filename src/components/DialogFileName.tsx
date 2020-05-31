import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export interface DialogSaveProps {
    open: boolean;
    handleClose: any;
    fileName: string;
    setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
}

const DialogFileName: React.FC<DialogSaveProps> = (props: DialogSaveProps) => {
    const [fileNameLocal, setFileNameLocal] = useState(props.fileName);
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>Cambiar nombre</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Esta opción le permite cambiar el nombre del archivo de desglose por uno personalizado.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="nameFile" size="small"
                    label="Nombre del archivo"
                    fullWidth value={fileNameLocal} onChange={(name) => {
                    setFileNameLocal(name.target.value)
                }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} variant="outlined">
                    Cancelar
                </Button>
                <Button onClick={() => {
                    props.setFieldValue('fileName', fileNameLocal);
                    props.handleClose();
                }} variant="outlined">
                    Cambiar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogFileName