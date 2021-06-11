import React from 'react'
import "./Element.css"

function Element({id, icon, count, label}) {
    return (
        <div className={ id===0 ? "Selected__element" : "element"}>
            <img src={icon} alt ="logo" className="icon2" /> 
            <h3>{count}</h3>
            <p>{label}</p>
        </div>
    )
}

export default Element
