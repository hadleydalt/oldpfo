import React from 'react'
import '../../css/App.css'
import { Button } from './Button'

export const ThreeButtons = (props) => {

    const names = props.names
    const square = props.square

    const links = props.links
    const navs = props.navs

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

    const classNames = ["tb-button-normal", "tb-button", "tb-button-normal"]

    return (
        <div style={wrapperStyle}>
            {classNames.map((className, index) => {
                return (
                    <Button key={index} name={names[index]} bgStyle={bgStyle} className={className} square={square} link={links[index]} nav={navs[index]} handleSwitch={props.handleSwitch}/>
                )
            })}
        </div>
    )
}