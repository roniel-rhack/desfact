import {desgloseInterface} from "./desgloseDefault";

const sumaImporte = (desgloses: desgloseInterface[]) => {
    let total = 0;
    desgloses.forEach(value => {
        if (!!value.imp_cargo)
            total += value.imp_cargo;
    })
    return total;
}

export default sumaImporte;