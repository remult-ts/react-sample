import React from 'react';
import { Column } from '@remult/core';


function MyInput(props: { column: Column, change?: () => void }) {
    let [val, setVal] = React.useState(props.column.value);
    if (!val)
        val = '';
    return (<input value={val}  onChange={x => { props.column.rawValue = x.target.value; setVal(props.column.value); if (props.change) props.change() }} />)
}

export default MyInput; 
export function MyCheckBox(props: { column: Column, change?: () => void }) {
    let [val, setVal] = React.useState(props.column.value);
    if (!val)
        val = '';
    return (<input checked={val} type="checkbox" onChange={x => { props.column.rawValue = x.target.value; setVal(props.column.value); if (props.change) props.change() }} />)
}