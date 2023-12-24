import React from 'react'
import './App.css'

export const ThreeButtons = (props) => {

    const square = props.square

    const wrapperStyle = {
        height: square ? 250 : 150,
        width: square ? 80 : 170,
        display: "flex",
        flexDirection: "column",
        marginTop: 20
    }

    const bgStyle = {
        marginTop: 10,
        width: square ? 72 : 171,
        height: square ? 72 : 36,
        borderRadius: 6,
        display: "flex",
        background: "black",
        alignItems: "center",
        justifyContent: "center"
    }

    const buttonStyle = {
        width: square ? 45 : 160,
        height: square ? 45 : 25,
        borderBottom: square ? "12px solid gray" : "4px solid gray",
        borderRight: square ? "12px solid lightgray" : "4px solid lightgray",
        borderTop: square ? "12px solid #fafafa" : "4px solid #fafafa",
        borderLeft: square ? "12px solid #E7E7E7" : "4px solid #E7E7E7",
        borderRadius: 4,
        fontFamily: "Silkscreen",
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <div style={wrapperStyle}>
            <div style={bgStyle}>
                <div className="tb-button-normal" style={buttonStyle}>
                    op1
                </div>
            </div>

            <div style={bgStyle}>
                <div className="tb-button" style={buttonStyle}>
                    op
                </div>
            </div>

            <div style={bgStyle}>
                <div className="tb-button-normal" style={buttonStyle}>
                    op3
                </div>
            </div>
        </div>
    )
}