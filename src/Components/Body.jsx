import React, { useState } from "react";
import BriefNote from "./BriefNote";
import NoteDesc from "./NoteDesc";
import list1 from "./notes";
import "./Body.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Body(props) {

    if(!JSON.parse(window.localStorage.getItem("notes"))) {
        window.localStorage.setItem("notes", JSON.stringify(list1));
    }
    const [ind, setInd] = useState(0);
    const [notes, updateNotes] = useState(JSON.parse(window.localStorage.getItem("notes")));
    // console.log(notes);
    // const [notes, updateNotes] = useState(list);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    function handleClick(event, param) {
        {notes.map((obj,i) => {
            if (obj.id===param) {
                setInd(i);
            }
        })}
        // setInd(param-1);
    }

    function addNote() {
        let index = 0;
        if (notes.length>0) index = notes[notes.length-1].id + 1;
        const newNotes = [...notes, {
            id: index,
            title: "Title",
            time: "30/07/2022",
            content: "Content",
        }];
        updateNotes(prevNotes => {
            return newNotes
        })
        console.log(notes);
        window.localStorage.setItem("notes", JSON.stringify(newNotes));
    }

    function delNote(event, param) {
        let newNotes = [];
        for (let i = 0; i < notes.length; i++) {
            const e = notes[i];
            if(e.id!==param){
                newNotes.push(e);
            }
            else if (i===ind) {
                setInd(0);
            }
        }
        updateNotes(newNotes);
        window.localStorage.setItem("notes", JSON.stringify(newNotes));
        // setInd(0);
    }
    function handleChange(event, id) {
        const {name,value} = event.target;
        // console.log(value); console.log(name); console.log(id+1);
        const dt = new Date();
        const y = dt.getFullYear(); let m = dt.getMonth(); let d = dt.getDate();
        let h = dt.getHours(); let min = dt.getMinutes();
        if(m<10) m="0"+m; if(d<10) d="0"+d;
        if(h.length<10) h="0"+h; if(min<10) min="0"+min;
        const date = h+":"+min+", "+d+"/"+m+"/"+y;
        updateNotes(oldNotes => {
            const list = oldNotes.map((item,j) => {
                if(item.id===(id)){
                    return {...item, [name]: value, time: date};
                }
                else {
                    return item;
                }
            })
            window.localStorage.setItem("notes", JSON.stringify(list));
            return list;
        })
        // console.log(list);
    }

    return (
        <div className="main-content">
            <span style={{zIndex: "1"}}>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                            <FaIcons.FaBars onClick={showSidebar} />
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                    <AiIcons.AiOutlineClose />
                            </li>
                            <li className="add-menu">
                                {(!notes)? null : notes.map((obj) => {
                                    return (
                                        <div key={obj.id} className="bnote-cont">
                                            <BriefNote onCl={event => handleClick(event, obj.id)} onChange={event => handleChange(event, obj.id)} onDel={event => delNote(event, obj.id)} note={obj} />
                                            <hr></hr>
                                        </div>
                                    )
                                })}
                            </li>
                        </ul>
                    </nav>
                </IconContext.Provider>
            </span>
            <button className="addBtn" onClick={addNote}>+</button>
            <div className="add">
                {(!notes)? null : notes.map((obj) => {
                    return (
                        <div key={obj.id} className="bnote-cont">
                            <BriefNote onCl={event => handleClick(event, obj.id)} onChange={event => handleChange(event, obj.id)} onDel={event => delNote(event, obj.id)} note={obj} />
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
            <div className="noteDesc">
                {/* {console.log(notes)} */}
                {notes.length>0 ? <NoteDesc onChange={event => handleChange(event, notes[ind].id)} note={notes[ind]}/> : null } 
            </div>
        </div>
    )
}

export default Body;