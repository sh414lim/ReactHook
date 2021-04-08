import React, { useState } from 'react';

const Ust=()=>{
    const [item,setiteml]=useState(1)

    const addItem=()=>{
        setiteml(item+1)
    }
    const minusItem=()=>{
        setiteml(item-1);
    }
    return(
        <div className="state">
        <h1>Hello Number{item}</h1>

        <button onClick={addItem}>Add</button>
        <button onClick={minusItem}>Miuns</button>

        </div>
    )
}

export default Ust;