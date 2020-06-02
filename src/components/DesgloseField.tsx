import React from "react";
import {Field, FieldArrayRenderProps, FieldAttributes} from "formik";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

interface iProps extends FieldAttributes<any> {
  index: number;
  submitCount: number;
  arrayHelpers: FieldArrayRenderProps;
  error?: any;
}

const DesgloseField = (props: iProps) => {
  return (
    <div
      style={{
        borderBottom: "solid 1px silver",
        padding: 5,
        borderRadius: 15,
      }}
    >
      <Field
        name={`desgloses.${props.index}.CUENTA`}
        as={TextField}
        error={props.error?.CUENTA && props.submitCount > 0}
        placeholder="Cuenta"
        size="small"
        helperText={props.submitCount > 0 ? props.error?.CUENTA : undefined}
        style={{marginRight: 20, width: 200}}
      />
      <Field
        type="number"
        step={0.1}
        name={`desgloses.${props.index}.IMP_CARGO`}
        error={props.error?.IMP_CARGO && props.submitCount > 0}
        as={TextField}
        size="small"
        helperText={props.submitCount > 0 ? props.error?.IMP_CARGO : undefined}
        placeholder="Importe"
        style={{marginRight: 40, width: 200}}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <Button
        variant="outlined"
        size="small"
        onClick={() => props.arrayHelpers.remove(props.index)}
        style={{
          borderRadius: 50,
        }}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default DesgloseField;
