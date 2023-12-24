import React from 'react'
import './App.css'
import { Canvas } from './Canvas'

export const PaintBox = (props) => {

    const [color, setColor] = React.useState("red")

    const colorMap = {
        "red": "rgb(234, 120, 120)",
        "red-orange": "rgb(234, 160, 120)",
        "yellow-orange": "rgb(234, 200, 120)",
        "yellow": "rgb(230, 234, 120)",
        "yellow-green": "rgb(181, 234, 120)",
        "green": "rgb(120, 234, 126)",
        "blue": "rgb(120, 234, 226)",
        "periwinkle": "rgb(120, 181, 234)",
        "indigo": "rgb(120, 120, 234)",
        "purple": "rgb(173, 120, 234)",
        "pink": "rgb(234, 120, 217)",
        "gray": "rgb(172, 172, 172)"
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
                        <div className="Notepad-menu-unselected">File</div>
                        <div className="Notepad-menu-selected">Edit</div>
                        <div className="Notepad-menu-unselected">View</div>
                        <div className="Notepad-menu-unselected">Image</div>
                        <div className="Notepad-menu-unselected">Options</div>
                        <div className="Notepad-menu-unselected">Help</div>
                    </div>
                    <div className="Paintbox-body">
                        <div className="Paintbox-paints">
                            <div className="Paintbox-paint" style={{
                                background: colorMap["red"], 
                                borderColor: color==="red" ? "white" : "black", 
                                filter: "drop-shadow(0px 0px 6px white)"
                            }}/>
                            <div className="Paintbox-paint" style={{background: colorMap["red-orange"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["yellow-orange"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["yellow"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["yellow-green"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["green"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["blue"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["periwinkle"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["indigo"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["purple"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["pink"]}}/>
                            <div className="Paintbox-paint" style={{background: colorMap["gray"]}}/>
                            <div className="Paintbox-erase" style={{}}/>
                        </div>
                        <Canvas />
                    </div>
                </div>
            </div>
        </div>
    )
}