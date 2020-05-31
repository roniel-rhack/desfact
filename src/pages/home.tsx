import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import desgloseDefaultValue from "../utils/desgloseDefault";
import saveDbf from "../request/saveDbf";
import {FieldArray, Form, Formik} from "formik";
import StatusBar from "../components/StatusBar";
import autoFileName from "../utils/autoFileName";
import OptionsPanel from "../components/OptionsPanel";
import DesgloseField from "../components/DesgloseField";
import validationSchema from "../utils/schemaValidation";

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
                        validationSchema={validationSchema}
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
                    {({values, setFieldValue, handleSubmit, isSubmitting, errors}) => (
                        <Form>
                            <FieldArray name="desgloses">
                                {arrayHelpers => (
                                    <Fragment>
                                        {values.desgloses.map((desg, index) => (
                                            <DesgloseField index={index} arrayHelpers={arrayHelpers}
                                                           error={errors.desgloses ? errors.desgloses[index] : undefined}
                                                           key={index}/>
                                        ))}
                                        <OptionsPanel isSubmitting={isSubmitting} arrayHelpers={arrayHelpers}
                                                      handleSubmit={handleSubmit} fileName={values.fileName}
                                                      setFieldValue={setFieldValue}/>
                                        <StatusBar desgloses={values.desgloses} fileName={values.fileName}/>
                                        {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
                                        {/*<pre>{JSON.stringify(errors, null, 2)}</pre>*/}
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