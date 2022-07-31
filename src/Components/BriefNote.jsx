import React from "react";
import "./BriefNote.css";

function BriefNote(props){


    let desc = props.note.content;
    if (desc.length>40) {
        desc = desc.substring(0,40);
        desc+="...";
    }
    
    return (
        <div key={props.note.id} className="brief-note">
            <span onClick={props.onCl} className="notes-text">
                <span>{props.note.title}</span>
                <span>{props.note.time}</span>
                <span>{desc}</span>
            </span>
            <span className="del-icon"><i onClick={props.onDel} className="fa-solid fa-trash"></i></span>
        </div>
    )
}

export default BriefNote;