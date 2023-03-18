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
        <div style={{top: '3%',left: '75%', position: 'fixed'}}>
            {props.showBtn && <button className="btn btn-3" onClick={functionParent} style={{backgroundColor: "#4F2C4E",paddingRight: "40px", paddingTop: "15px",paddingLeft: "40px", paddingBottom: "15px",marginBottom: "10px", borderBottomLeftRadius: "40px", borderTopRightRadius: "40px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px", textAlign: "center", color: "white", fontSize: "30px"}}>50:50</button>}
        </div>
    )
}
export default Help