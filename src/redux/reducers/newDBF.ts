import {SAVE_DBF_PENDING,
SAVE_DBF_SUCCESS,
SAVE_DBF_ERROR} from '../actions/saveDBF'

interface DefaulStateInterface {
    pending: boolean,
    records: Object[],
    error: string | null
}

const defaultState: DefaulStateInterface = {
    pending: false,
    records: [],
    error: null
};

interface DestProps {
    type: string,
    payload: object
}

const reducer = (state = defaultState, {type, payload}: DestProps) => {
    switch (type) {
        case SAVE_DBF_PENDING:
            return {
                ...state,
                pending: true
            };
        case SAVE_DBF_SUCCESS:
            return {
                ...state,
                pending: false,
                products: payload
            };
        case SAVE_DBF_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            };
        default:
            return state;
    }
};

export default reducer;

