import React from 'react'
import '../../css/App.css'
import { Canvas } from './Canvas'
import { PaintBoxPaint } from './PaintBoxPaint'
import { colorMap } from '../../Constants'
import { NotepadMenuOpt } from '../notepad/NotepadMenuOpt'

export const PaintBox = (props) => {

    const [color, setColor] = React.useState("red")

    const colors = ["red", "red-orange", "yellow-orange", "yellow", "yellow-green", "green", "blue", "periwinkle", "indigo", "purple", "pink", "gray"]

    const menuOptions = ["File", "Edit", "View", "Image", "Options", "Help"]

    const handleClick = (c) => {
        setColor(c)
    }

    return (
        <div className="Paintbox-wrapper">
            <div className="Notepad-bg" style={{width: 400, height: 240}}>
                <div className="Notepad-exterior" style={{width: 390, height: 230}}>
                    <div className="Notepad-header" style={{background: "linear-gradient(90deg, rgb(234, 165, 234) 0%, rgb(229, 187, 194) 50%, rgb(232, 204, 153) 100%)", width: 389}}>
                        <div className="Notepad-header-wrapper" style={{width: 375}}>
                            <div className="Notepad-title">Untitled.png</div>
                            <div className="Notepad-x">x</div>
                        </div>
                    </div>
                    <div className="Notepad-menu" style={{width: 370, justifyContent: "space-evenly"}}>
                        {menuOptions.map((o, index) => {
                            return (
                                <NotepadMenuOpt key={index} name={o} selected={o==="Edit"}/>
                            )
                        })}
                    </div>
                    <div className="Paintbox-body">
                        <div className="Paintbox-selected-color" style={{background: colorMap[color]}} />
                        <div className="Paintbox-paints">
                            {colors.map((c, index) => {
                                return (
                                    <div onClick={() => handleClick(c)}>
                                        <PaintBoxPaint key={index} color={c} stateColor={color} />
                                    </div>
                                )
                            })}
                        </div>
                        <Canvas curr={color} />
                    </div>
                </div>
            </div>
        </div>
    )
}