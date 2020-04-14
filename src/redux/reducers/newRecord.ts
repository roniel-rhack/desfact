const defaultState: Object[] = [

];

interface DestProps {
    type: string,
    payload: object
}

const reducer = (state = defaultState, {type, payload}: DestProps) => {
    switch (type) {
        case "SAVE_RECORD":
            console.log(state);
            return [
                ...state,
                payload
            ];
        default:
            return state;
    }
};

export default reducer;