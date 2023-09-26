import React from "react";
import { useState } from "react";
import VectorOpen from "../../images/VectorOpen.png"
import "./Collapse.scss"
import "../Mixin.scss"

function Collapse(props) {

    const [open, setOPen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const OpenIt = () => {
        setOPen(!open);
        setToggle(!toggle);
    };

    return (
        <div className="collapse">
            <div className="collapse__title">
                <h1> {props.title}</h1>
                <button className="collapse__button" onClick={OpenIt}>
                    <img src={VectorOpen} alt="fleche vers le bas" className={toggle ? "rotate" : "arrow"} />
                </button>
            </div>
            {open && <p className="collapse__p slide-in"> {props.content}</p>}
        </div>
    )
}

export default Collapse
