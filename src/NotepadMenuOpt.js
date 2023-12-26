import React from 'react'
import './App.css'

export const NotepadMenuOpt = (props) => {

    const selected = props.selected
    const name = props.name

    return (
        <div className={selected ? "Notepad-menu-selected" : "Notepad-menu-unselected"}>{name}</div>
    )
}