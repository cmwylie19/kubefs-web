import { useState } from 'react';
import "./Header.css";

const DisplayCount = (currentTitle, setTitle, count ) => currentTitle === "Kube-FS" ? setTitle("total: "+count) : setTitle("Kube-FS")
export const Header = ({ date, setDate, count }) => {
    const [color, setColor] = useState("purple");
    const [title, setTitle] = useState("Kube-FS")
    return <header className="header" >
        <h1 onMouseDown={()=>DisplayCount(title,setTitle,count)} onMouseOver={()=>setColor("#"+Math.floor(Math.random()*16777215).toString(16))} style={{color:color}}>{title}</h1>
        <input type="text" placeholder="Date yymmdd" value={date} onChange={e => setDate(e.target.value)} />
        </header>
}