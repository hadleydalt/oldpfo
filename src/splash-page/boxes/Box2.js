import React from 'react'
import '../../css/App.css'
import { Button } from './Button'

export const Box2 = (props) => {

    const height = props.height.toString()

    return (
        <div className="Box2-wrapper" style={{height: String(height + "px")}}>
            <div className="Box2-bg" style={{height: String(height + "px")}}>
                <div className="Box2-exterior" style={{height: String((props.height - 18) + "px")}}>
                    <div className="Box2-interior" style={{height: String((props.height - 30) + "px")}}>
                        <div className="Box2-header" />
                        <div className="Box2-header-wrapper">
                            <div className="Box2-header-text">
                                Hello World!
                            </div>
                            <div className="white-x">X</div>
                        </div>
                        <div className="Box2-buttons-container" style={{height: String((props.height - 60) + "px")}}>
                            <div className="Box2-decor-bg">
                                <div className="Box2-decor">
                                    <img className="Box2-panel" src={require('../../graphics/Panel.png')} alt="" draggable={false} />
                                    <img className="Box2-planet-noring" src={require('../../graphics/PlanetNoRing.png')} alt="" draggable={false}/>
                                    <img className="Box2-planet" src={require('../../graphics/Planet.png')} alt="" draggable={false}/>
                                </div>
                            </div>
                            <Button name="Continue to site" width={150} height={35} handleSwitch={() => props.handleSwitch(100, true, false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
