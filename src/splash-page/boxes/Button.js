import '../../css/App.css'
import { useState } from 'react'

export const Button = (props) => {
    const link = props.link
    const nav = props.nav

    const [isMouseEntered, setIsMouseEntered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    function handleMouseDown() {
        setIsPressed(true)
    }

    function handleMouseUp() {
        setIsPressed(false)
    }

    function handleMouseEnter() {
        setIsMouseEntered(true)
    }

    function handleMouseLeave() {
        setIsMouseEntered(false)
        setIsPressed(false)
    }

    return (
        <div className="Box1-button-background"
            style={{
                height: props.height + 12, 
                width: props.width + 12
            }}
        >
            {link && <a href={nav} style={{textDecoration: "none"}}>
            <div 
                className="Box1-button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: isMouseEntered ? "pointer" : "default",
                    borderBottom: isPressed ? "none" : "4px solid gray",
                    borderRight: isPressed ? "none" : "4px solid lightgray",
                    borderTop: isPressed ? "none" : "4px solid #fafafa",
                    borderLeft: isPressed ? "none" : "4px solid #E7E7E7",
                    height: isPressed ? props.height + 8 : props.height,
                    width: isPressed ? props.width + 8 : props.width,
                    filter: isPressed ? "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5)" : "none",
                }}
            >
                {props.name}
            </div>
                </a>}
            {!link && 
            <div 
                className="Box1-button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {props.handleSwitch(nav, true, false)}}
                style={{
                    cursor: isMouseEntered ? "pointer" : "default",
                    borderBottom: isPressed ? "none" : "4px solid gray",
                    borderRight: isPressed ? "none" : "4px solid lightgray",
                    borderTop: isPressed ? "none" : "4px solid #fafafa",
                    borderLeft: isPressed ? "none" : "4px solid #E7E7E7",
                    height: isPressed ? props.height + 8 : props.height,
                    width: isPressed ? props.width + 8 : props.width,
                    filter: isPressed ? "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5)" : "none"
                }}
            >
                {props.name}
            </div>}
        </div>
    )
}