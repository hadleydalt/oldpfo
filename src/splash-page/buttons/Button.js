import React from 'react'
import '../../css/App.css'

export const Button = (props) => {
    const [isMouseEntered, setIsMouseEntered] = React.useState(false)
    const [isPressed, setIsPressed] = React.useState(false)

    const className = props.className
    const bgStyle = props.bgStyle
    const name = props.name
    const square = props.square

    const buttonStyle = {
        width: square && isPressed ? 69 : square && !isPressed ? 45 : !square && isPressed ? 168 : 160,
        height: square && isPressed ? 69 : square && !isPressed ? 45 : !square && isPressed ? 33 : 25,
        borderBottom: isPressed ? "none" : square ? "12px solid gray" : "4px solid gray",
        borderRight: isPressed ? "none" : square ? "12px solid lightgray" : "4px solid lightgray",
        borderTop: isPressed ? "none" : square ? "12px solid #fafafa" : "4px solid #fafafa",
        borderLeft: isPressed ? "none" : square ? "12px solid #E7E7E7" : "4px solid #E7E7E7",
        borderRadius: 4,
        fontFamily: "Silkscreen",
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isMouseEntered ? "pointer" : "default",
        filter: isPressed ? "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))" : "none"
    }

    function handleMouseDown() {
        setIsPressed(true)
    }

    function handleMouseUp() {
        setIsPressed(false)
        //props.handleSwitch(100, true, false)
    }

    function handleMouseEnter() {
        setIsMouseEntered(true)
    }

    function handleMouseLeave() {
        setIsMouseEntered(false)
        setIsPressed(false)
    }

    return (
            <div style={bgStyle}>
                <div 
                    className={className} 
                    style={buttonStyle}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {name}
                </div>
            </div>
    )
}