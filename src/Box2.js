import React from 'react'
import './App.css'

export const Box2 = (props) => {

    const height = props.height.toString()

    return (
        <div className="Box2-wrapper" style={{height: String(height + "px")}}>
            <div className="Box2-bg" style={{height: String(height + "px")}}>
                <div className="Box2-exterior" style={{height: String((height - 18) + "px")}}>
                </div>
            </div>
        </div>
    )
}
