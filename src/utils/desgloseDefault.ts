export interface desgloseInterface {
    IMP_CARGO: number;
    CUENTA: string;
    CONTAB_BAN: boolean;
    PENDIENTE: number;
}

var desgloseDefaultValue = (): desgloseInterface => (
    {
        ...{
            CUENTA: "", IMP_CARGO: 0,
            CONTAB_BAN: false, PENDIENTE: 0
        }
    }
)

export default desgloseDefaultValue;