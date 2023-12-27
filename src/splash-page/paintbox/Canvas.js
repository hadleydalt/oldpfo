import React from 'react'
import '../../css/App.css'
import { colorMap } from '../../Constants'

export const Canvas = (props) => {

    const cols = Array.from({ length: 31 }, (_, index) => index + 1)
    const rows = Array.from({ length: 16 }, (_, index) => index + 1)

    const [isMouseDown, setIsMouseDown] = React.useState(false)

    const [pixelColors, setPixelColors] = React.useState(new Map())

    const color = colorMap[props.curr]

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

    const handleErase = () => {
        setPixelColors(new Map())
    }

    return (
        <>
        <div className="Paintbox-erase" 
            onClick={handleErase}
        >
            ERASE
        </div>
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
                                    style={{background: pixelColors.has(currIndex) ? pixelColors.get(currIndex) : "white"}}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
        </>
    )
}