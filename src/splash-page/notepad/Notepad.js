import React from 'react'
import '../../css/App.css'
import { NotepadMenuOpt } from './NotepadMenuOpt'

export const Notepad = (props) => {
    const height = props.height.toString()
    const [clicked, setClicked] = React.useState(false)

    const menuOptions = ["File", "Edit", "Format", "View", "Help"]

    return (
        <div className="Notepad-wrapper" style={{height: String(height + "px")}}>
            <div className="Notepad-bg" style={{height: String(height + "px")}}>
                <div className="Notepad-exterior" style={{height: String((props.height - 10) + "px")}}>
                    <div className="Notepad-header">
                        <div className="Notepad-header-wrapper">
                            <div className="Notepad-title">Note Pad</div>
                            <div className="Notepad-x">x</div>
                        </div>
                    </div>
                    <div className="Notepad-menu">
                        {menuOptions.map((o, index) => {
                            return (
                                <NotepadMenuOpt key={index} name={o} selected={o==="Edit"}/>
                            )
                        })}
                    </div>
                    <div 
                        className="Notepad-enter-wrapper" 
                        style={{height: String((props.height - 80) + "px")}}
                        onClick={() => {
                            setClicked(true)
                        }}
                    >
                        <div className="Notepad-cursor" style={{color: clicked ? "transparent" : "black"}}>|</div>
                            <textarea className="Notepad-enter" style={{height: String((props.height - 80) + "px"), fontFamily: "Work Sans"}} name="Text1" cols="40" rows="5"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}