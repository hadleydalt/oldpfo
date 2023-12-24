import React from 'react'
import './App.css'

export const Canvas = (props) => {

    const color = props.curr

    const [isMouseDown, setIsMouseDown] = React.useState(false)

    const isMouseInsideDiv = (event, divRef) => {
        const rect = divRef.current.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top

        return mouseX >=0 && mouseX <= rect.width && mouseY >= 0 && mouseY < rect.height
    }

    const handleMouseDown = () => {
        setIsMouseDown(true)
    }

    const handleMouseUp = () => {
        setIsMouseDown(false)
    }

    const handleMouseMove = (event, divRef) => {
        if (isMouseDown && isMouseInsideDiv(event, divRef)) {
            console.log("Mouse Position: " + event.clientX + ", " + event.clientY)


        }
    }

    const trackedDivRef = React.useRef(null)

    return (
        <div 
            className="Paintbox-canvas"
            ref={trackedDivRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={(event) => handleMouseMove(event, trackedDivRef)}
        >
            
        </div>
    )
}