import React from 'react'
import './App.css'

export const Box1 = (props) => {
    const height = props.height.toString()
    return (
        <div className="Box1-wrapper" style={{height: height + "px"}}>
            {props.bg && 
                <div>
                    <div className="Box1-bg" style={{height: String(height + "px")}}/>
                </div>
            }
            <div className="Box1-exterior" style={{height: String(height + "px")}}>
                <div className="Box1-top-wrapper">
                    <div className="box-top-text">
                        Hello
                    </div>
                    <div className="white-x">
                        X
                    </div>
                </div>
                <div className="Box1-interior" style={{height: String((height - 50) + "px")}}>
                    <img src={require('./Art2.png')} alt="" className="Box1-image" style={{height: String((height - 105) + "px")}} />
                    <div className="Box1-button-wrapper">
                        <div className="Box1-button-background">
                            <div className="Box1-button">
                                Button 1
                            </div>
                        </div>
                        <div className="Box1-button-background">
                        <div className="Box1-button">
                                Button 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.planet && <img src={require('./Planet.png')} alt="" className="planet" />}
        </div>
    )
}
