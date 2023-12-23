import React from 'react'
import './App.css'

export const Vertical = (props) => {

    const lines = Array.from({ length: 48 }, (_, index) => index + 1)

    return (
        <div style={{position: "fixed"}}>
            <div style={{display: "flex"}}>
                {lines.map((lineNum) => (
                    <div key={lineNum} className="vertical-line" style={{backgroundColor: props.color, opacity: props.opacity}}>
                    </div>
                ))}
            </div>
        </div>
    )
}