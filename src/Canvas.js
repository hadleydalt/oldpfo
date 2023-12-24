import React from 'react'
import './App.css'

export const Canvas = (props) => {

    const cols = Array.from({ length: 117 }, (_, index) => index + 1)
    const rows = Array.from({ length: 6 }, (_, index) => index + 1)


    const color = props.curr

    const [isMouseDown, setIsMouseDown] = React.useState(false)

    const [pixelColors, setPixelColors] = React.useState(new Map())

    const handleMouseDown = () => {
        setIsMouseDown(true)
    }

    const handleMouseUp = () => {
        setIsMouseDown(false)
    }

    const handleMouseEnter = (r, c) => {
        if (isMouseDown) {
            const uniqueIndex = getUniqueIndex(r, c)
            setPixelColors((prevPixelColors) => new Map(prevPixelColors).set(uniqueIndex, color));
        }
    }

    const getUniqueIndex = (r, c) => {
        return ((0.5 * (r + c) * (r + c + 1)) + c)
    }

    return (
        <div 
            className="Paintbox-canvas"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {cols.map((c)=> {
                return (
                    <div key={c}>
                        {rows.map((r)=> {
                            const currIndex = getUniqueIndex(r, c)
                            return (
                                <div key={r} 
                                    className="Paintbox-pixel" 
                                    onMouseEnter={()=>handleMouseEnter(r, c)}
                                    style={{background: pixelColors.has(currIndex) ? color : "purple"}}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}