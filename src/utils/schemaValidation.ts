import * as yup from "yup";
import {desgloseInterface} from "./desgloseDefault";

const validationSchema = yup.object({
  fileName: yup
    .string()
    .required("Es obligatorio que asigne un nombre de archivo")
    .max(100, "El nombre del archivo no puede tener más de 100 caracteres."),
  desgloses: yup.array().of(
    yup.object<desgloseInterface>({
      CUENTA: yup
        .string()
        .length(14, "La cuenta debe tener una longitud de 14 digitos.")
        .required("La cuenta es obligatoria.")
        .test(
          "only-numbers",
          "Este campo solo puede contener números.",
          (value) => {
            // eslint-disable-next-line
            return value == parseInt(value);
          }
        )
        .test(
          "cod_moneda",
          "El código de moneda debe ser CUP (40).",
          (value) => {
            return value.slice(0, 2) === "40";
          }
        )
        .test(
          "cod_contra",
          "El cod_contra de la cuenta debe ser alguno de los siguientes: (1344, 1345, 1348).",
          (value) => {
            return ["1344", "1345", "1348"].includes(value.slice(2, 6));
          }
        )
        .test("tip_contra", "El tip_contra debe ser 8.", (value) => {
          return value.slice(6, 7) === "8";
        }),
      IMP_CARGO: yup
        .number()
        .required("El importe es obligatorio.")
        .min(1, "El importe a desglosar debe ser mayor que $ 1.00.")
        .test(
          "rounds",
          "El importe no puede tener más de dos lugares decimales.",
          (value) => {
            // eslint-disable-next-line eqeqeq
            return value == value?.toFixed(2);
          }
        ),
      CONTAB_BAN: yup.boolean().required(),
      PENDIENTE: yup.number().required(),
    })
  ),
});

export default validationSchema;
