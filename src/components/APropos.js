import React from "react";
import { useState } from "react";
import VectorOpen from "../VectorOpen.png"
import VectorClose from "../VectorClose.png"

function APropos (props) {

const [open, setOPen] = useState(false);
const [vectorOpen, setVectorOpen] = useState (true)
const [vectorClose, setVectorClose] = useState (false)

const OpenIt = () => {
    setOPen(!open);
    setVectorOpen (!vectorOpen)
    setVectorClose (!vectorClose) 
    };

return (
    <div>
        <h1> {props.title}</h1>
        <button className="DropdownOpen" onClick={OpenIt}> 
            {vectorOpen && <img src={VectorOpen} alt="fleche vers le bas" className="vectorOpen" />}
            {vectorClose && <img src={VectorClose} alt="fleche vers le haut" className="vectorClose" />}
        </button> 
        <div>
            <p>{open && props.description} </p>
        </div>
    </div>
)
}

export default APropos
