import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import desgloseDefaultValue from "../utils/desgloseDefault";
import saveDbf from "../request/saveDbf";
import {Field, FieldArray, Form, Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import StatusBar from "../components/StatusBar";
import autoFileName from "../utils/autoFileName";
import OptionsPanel from "../components/OptionsPanel";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 60,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
        }
    }),
);

const Home: React.FC = (props: any) => {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.paper}>
                <Formik initialValues={{desgloses: [desgloseDefaultValue()], fileName: autoFileName()}}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(true)
                            saveDbf(values.desgloses)
                                .then(res => res.json())
                                .then(res => {
                                    if (res.error) {
                                        throw(res.error);
                                    }
                                    setSubmitting(false)
                                    return res;
                                })
                                .catch(error => {
                                    console.log(error);
                                    setSubmitting(false)
                                })
                        }}>
                    {({values, setFieldValue, handleSubmit, isSubmitting}) => (
                        <Form>
                            <FieldArray name="desgloses">
                                {arrayHelpers => (
                                    <Fragment>
                                        {values.desgloses.map((desg, index) => (
                                            <div key={desg.key}
                                                 style={{
                                                     borderBottom: "solid 1px silver",
                                                     padding: 5,
                                                     borderRadius: 15
                                                 }}>
                                                <Field name={`desgloses.${index}.cuenta`} as={TextField}
                                                       placeholder="Cuenta" size="small"
                                                       style={{marginRight: 20}}/>
                                                <Field type="number" step={0.1} name={`desgloses.${index}.imp_cargo`}
                                                       as={TextField} size="small"
                                                       placeholder="Importe" style={{marginRight: 40}}/>
                                                <Button variant="outlined" size="small"
                                                        onClick={() => arrayHelpers.remove(index)}
                                                        style={{
                                                            borderRadius: 50
                                                        }}>Eliminar</Button>
                                            </div>
                                        ))}
                                        <OptionsPanel isSubmitting={isSubmitting} arrayHelpers={arrayHelpers}
                                                      handleSubmit={handleSubmit} fileName={values.fileName}
                                                      setFieldValue={setFieldValue}/>
                                        <StatusBar desgloses={values.desgloses} fileName={values.fileName}/>
                                        {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                                    </Fragment>
                                )}
                            </FieldArray>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>

    )
};

export default Home;