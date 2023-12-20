import React from 'react'
import './App.css'

export const Horizontal = (props) => {

    const lines = Array.from({ length: 30 }, (_, index) => index + 1)

    return (
        <div style={{position: "absolute"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                {lines.map((lineNum) => (
                    <div key={lineNum} className="horizontal-line" style={{backgroundColor: props.color}}>
                    </div>
                ))}
            </div>
        </div>
    )
}