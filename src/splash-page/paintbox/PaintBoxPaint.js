import React from 'react'
import '../../css/App.css'
import { colorMap } from '../../Constants'

export const PaintBoxPaint = (props) => {

    const color = props.color
    const stateColor = props.stateColor

    return (
        <div className="Paintbox-paint" style={{
            background: colorMap[color], 
            borderColor: stateColor===color ? "white" : "black", 
            filter: stateColor===color ? "drop-shadow(0px 0px 6px white)" : ""
        }}/>
    )
}