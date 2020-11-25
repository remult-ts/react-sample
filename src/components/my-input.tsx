import React from 'react';
import { Column } from '@remult/core';


function MyInput(props: {column: Column}) {
    const [val, setVal] = React.useState(props.column.value);
    return (<input value={val} onChange={x => { props.column.rawValue = x.target.value; setVal(props.column.value) }} />)
}

export default MyInput; 