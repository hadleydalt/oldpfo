import React from 'react'
import '../css/App.css'
import { Col1, Col2, Col3 } from './Columns'
import { Horizontal, Vertical } from '../Background'

export const SplashPage = (props) => {

    const width = props.width
    const opacity = props.opacity

    return (
        <>
            <Vertical color="#EEDFB1" opacity={opacity}/>
            <Horizontal color="#EEDFB1" opacity={opacity}/>
            <div className="splash-page" style={{justifyContent: width < 1370 ? "space-evenly" : "space-between", marginTop: width < 877 ? "20vh" : "0"}}>
                <Col1 width = {width} handleSwitch={props.handleSwitch} />
                {width >= 877 && <Col2 handleSwitch={props.handleSwitch} />}
                {width >= 1370 && <Col3 handleSwitch={props.handleSwitch} />}
            </div>
        </>
    )
}