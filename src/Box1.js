import React from 'react'
import './App.css'

export const Box1 = (props) => {
    const height = props.height.toString()
    return (
        <div style={{position: "absolute"}}>
            <div className="Box1-exterior" style={{height: String(height + "px")}}>
                <div className="Box1-interior" style={{height: String((height - 50) + "px")}}>

                </div>
            </div>
        </div>
    )
}