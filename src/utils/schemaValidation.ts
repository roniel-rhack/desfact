import * as yup from "yup";
import {desgloseInterface} from "./desgloseDefault";

const validationSchema = yup.object({
    fileName: yup.string()
        .required('Es obligatorio que asigne un nombre de archivo')
        .max(100, 'El nombre del archivo no puede tener más de 100 caracteres.'),
    desgloses: yup.array().of(yup.object<desgloseInterface>({
        cuenta: yup.string()
            .length(14, 'La cuenta debe tener una longitud de 14 digitos.')
            .required('La cuenta es obligatoria.')
            .test('only-numbers', "Este campo solo puede contener números.", (value) => {
                // eslint-disable-next-line
                return value == parseInt(value);
            }),
        imp_cargo: yup.number()
            .required("El importe es obligatorio.")
            .min(1, "El importe a desglosar debe ser mayor que $ 1.00.")
            .test('rounds', "El importe no puede tener más de dos lugares después del punto.", value => {
                // eslint-disable-next-line eqeqeq
                return value == value?.toFixed(2);
            }),
        contab_ban: yup.boolean().required(),
        pendiente: yup.number().required()
    }))
})

export default validationSchema;