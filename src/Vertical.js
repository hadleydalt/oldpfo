import React from 'react'
import './App.css'

export const Vertical = (props) => {

    const lines = Array.from({ length: 50 }, (_, index) => index + 1)

    return (
        <div>
            <div style={{display: "flex"}}>
                {lines.map((lineNum) => (
                    <div key={lineNum} className="vertical-line" style={{backgroundColor: props.color}}>
                    </div>
                ))}
            </div>
        </div>
    )
}