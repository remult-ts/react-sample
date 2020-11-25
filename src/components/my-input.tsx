import React from 'react';
import { Column } from '@remult/core';


function MyInput(props: { column: Column, change?: () => void, placeholder?: string, type?: string }) {
    let [val, setVal] = React.useState(props.column.value);
    if (!val)
        val = '';
    return (<input
        value={val}
        onChange={x => { props.column.rawValue = x.target.value; setVal(props.column.value); if (props.change) props.change() }}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : 'text'}
    />)
}

export default MyInput;
export function MyCheckBox(props: { column: Column, change?: () => void }) {
    let [val, setVal] = React.useState(props.column.value);
    if (!val)
        val = '';
    return (<input checked={val} type="checkbox" onChange={x => { props.column.rawValue = x.target.value; setVal(props.column.value); if (props.change) props.change() }} />)
}