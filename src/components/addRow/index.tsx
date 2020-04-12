import React, {useEffect} from "react";
import Page from './page';
import {connect} from "react-redux";
import saveRecord from "../../redux/actions/saveRecord";

interface Record {
    account: string,
    amount: number
}

interface State {
    account: string,
    amount: number,
    valid?: boolean
}

const AddRow = (props:any) => {

    const [values, setValues] = React.useState<State>({
        amount: 0,
        account:'',
        valid: true
    });


    const saveNewRecord = () => {
        props.saveRecord({account:values.account, amount:values.amount});
    };


    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    console.log(props.newRecord);
    return(

        <Page
            account={values.account}
            amount={values.amount}
            handleChange={handleChange}
            saveNewRecord={saveNewRecord}
        />
    );
};

const mapStateToProps = (state:any) => {
    return {
        newRecord: state.newRecord,
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        saveRecord: (record:Record) => dispatch(saveRecord(record)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddRow)

