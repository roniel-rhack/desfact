export const type = 'SAVE_RECORD';

interface Record {
    account: string,
    amount: number
}

const saveRecord = (record: Record) => {
    return{
        type,
        payload: record
    }
};

export default saveRecord;