import React from "react";
import Page from './page';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchDBF} from '../../redux/actions/saveDBF';

interface Record {
    account: string,
    amount: number
}

interface State {
    account: string,
    amount: number,
    valid?: boolean
}

/*
 function dbfWrite(data: Object[]) {
    let rows = [
        { fname: 'Joe', lname: 'Bloggs' },
        { fname: 'Mary', lname: 'Smith' }
    ];
    let records: Object[] = [];
    data.map((record: any) => (
        records.push({cuenta: record.account, importe: record.amount, tramitado: "", pendiente: ""})
    ));
    console.log(records);

    let dbf = await DBFFile.create('example.dbf', [
        {name: 'cuenta', type: 'C', size: 255},
        {name: 'importe', type: 'C', size: 255, decimalPlaces: 2},
        {name: 'tramitado', type: 'C', size: 255},
        {name: 'pendiente', type: 'C', size: 255},
    ]);
    console.log("DBF Created!");
    //await dbf.appendRecords(records);
    console.log("Records added !");
    DBFFile.create('my.dbf', [
        { name: 'fname', type: 'C', size: 255 },
        { name: 'lname', type: 'C', size: 255 }
    ])
        .then(function (dbf) {
            console.log('DBF file created.');
            dbf.appendRecords(rows);
            return true;//dbf.append(rows);
        })
        .then(function (dbf) {
            console.log(rows.length + ' rows added.');
            return DBFFile.open('my.dbf');
        })
        .then(function (dbf) {
            // NEVER CALLED
            console.log('DBF file contains ' + dbf.recordCount + ' rows.');
            console.log('Field names: ' + dbf.fields.map(function (f) { return f.name; }).join(', '));
            return dbf.readRecords(100);
        })
        .catch(function (err) {
            console.log('An error occurred: ' + err);
        });

}*/

const SaveDBF = (props: any) => {
    const {fetchDBF, data} = props;
    const handleClick = () => {
        //dbfWrite(props.data);
        fetchDBF(data);
    };
    console.log(data);

    return (

        <Page
            handleClick={handleClick}
        />
    );
};

const mapStateToProps = (state: any) => {
    return {
        data: state.newRecord,
    }
};
const mapDispatchToProps = (dispatch:any) => bindActionCreators({
    fetchDBF: fetchDBF
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaveDBF)

