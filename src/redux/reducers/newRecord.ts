const defaultState: Object[] = [
    {
        account: "df",
        amount: 78
    }
];

interface DestProps {
    type: string,
    payload: object
}

const reducer = (state = defaultState, {type, payload}: DestProps) => {
    switch (type) {
        case "SAVE_RECORD":
            state.push(payload);
            return state;
        default:
            return state;
    }
};

export default reducer;