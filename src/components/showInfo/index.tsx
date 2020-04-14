import React from "react";
import Page from './page';
import {connect} from "react-redux";

interface Record {
    account: string,
    amount: number
}

interface State {
    account: string,
    amount: number,
    valid?: boolean
}

const ShowInfo = (props:any) => {

    console.log(props.data);
    return(

        <Page
            data={props.data}

        />
    );
};

const mapStateToProps = (state:any) => {
    return {
        data: state.newRecord,
    }
};

export default connect(mapStateToProps, null)(ShowInfo)

