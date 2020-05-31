export interface desgloseInterface {
    imp_cargo: number;
    cuenta: string;
    contab_ban: boolean;
    pendiente: number;
}

var desgloseDefaultValue = (): desgloseInterface => (
    {
        ...{
            cuenta: "", imp_cargo: 0,
            contab_ban: false, pendiente: 0
        }
    }
)

export default desgloseDefaultValue;