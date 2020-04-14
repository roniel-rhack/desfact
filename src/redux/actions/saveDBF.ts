export const SAVE_DBF_PENDING = 'SAVE_DBF_PENDING';
export const SAVE_DBF_SUCCESS = 'SAVE_DBF_SUCCESS';
export const SAVE_DBF_ERROR = 'SAVE_DBF_ERROR';

interface Record {
    account: string,
    amount: number
}

export const saveDBFPending = () => {
    return{
        type: SAVE_DBF_PENDING,
    }
};

export const saveDBFSuccess = (records: Record[]) => {
    return{
        type: SAVE_DBF_SUCCESS,
        payload: records
    }
};

export const saveDBFError = (error: any) => {
    return{
        type: SAVE_DBF_ERROR,
        payload: error
    }
};

export const fetchDBF = (records:Record[]) => {
    return (dispatch:any) => {
        dispatch(saveDBFPending());
        const requestOptions = {
            crossDomain:true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(records)
        };
        console.log(JSON.stringify(records));
        fetch('http://localhost:8080/createDBF', requestOptions)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(saveDBFSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error);
                dispatch(saveDBFError(error));
            })
    }
};



