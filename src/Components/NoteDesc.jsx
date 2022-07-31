import React, { useState, useEffect } from "react";
import "./NotesDesc.css";

function NoteDesc(props) {

    const [note, updateNote] = useState(props.note);

    useEffect(() => {
        updateNote(props.note);
    }, [props.note]);

    function changeHandler(event) {
        const { name, value } = event.target;
        updateNote (prevValue => {
            return {...prevValue, [name]: value};
        })
        props.onChange(event);
    }

    return (
        <div className="note-desc">
            <p className="last-edit">{props.note.time}</p>
            <p><input className="inpTitle" name="title" onChange={changeHandler} value={note.title} ></input></p>
            <p><textarea className="inpContent" name="content" onChange={changeHandler} value={note.content}></textarea></p>
        </div>
    )
}

export default NoteDesc;