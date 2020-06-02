import {desgloseInterface} from "./desgloseDefault";

const sumaImporte = (desgloses: desgloseInterface[]) => {
    let total = 0;
    desgloses.forEach(value => {
        if (!!value.IMP_CARGO)
            total += value.IMP_CARGO;
    })
    return total;
}

export default sumaImporte;