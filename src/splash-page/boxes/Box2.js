import React from 'react'
import '../../css/App.css'

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
                            <div className="Box2-button-bg">
                                <div className="Box2-button">
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
