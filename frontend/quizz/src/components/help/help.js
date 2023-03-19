import React, { useState, useEffect } from "react";
import "../help/5050HelpStyle.css"
function Help(props){

    function handleClick() {
        props.setShowBtn(false);
    }
    function handleChange(event) {
        props.parentCallback("Message from Child")
    }

    function functionParent() {
        handleClick()
        handleChange()
    }
    return(
        <div style={{top: '5%',left: '75%', position: 'fixed', boder:'2px solid blueviolet'}}>
            {props.showBtn && <button className="btn btn-3" onClick={functionParent} style={{color:'red'}}>50:50</button>}
        </div>
    )
}
export default Help