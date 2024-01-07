import React from 'react'
import '../../css/App.css'
import { Button } from './Button'

export const Box1 = (props) => {
    const height = props.height.toString()
    return (
        <div className="Box1-wrapper" style={{height: height + "px"}}>
            {props.bg && 
                <div>
                    <div className="Box1-bg" style={{height: String(height + "px")}}>
                    <div className="Box1-exterior" style={{height: String(height + "px")}}>
                    {props.planet && <img src={require('../../graphics/Planet.png')} alt="" className="planet" draggable={false} />}
                <div className="Box1-top-wrapper">
                    <div className="box-top-text">
                        More
                    </div>
                    <div className="white-x">
                        X
                    </div>
                </div>
                <div className="Box1-interior" style={{height: String((height - 50) + "px")}}>
                    <img src={require('../../graphics/Art2.png')} alt="" className="Box1-image" style={{height: String((height - 105) + "px")}} draggable={false} />
                    <div className="Box1-button-wrapper">
                        <Button name="About" width={100} height={30} link={false} nav={104} handleSwitch={props.handleSwitch} />
                        <Button name="Resume" width={100} height={30} link={true} nav="https://drive.google.com/file/d/1nhlNgpAaA78G_4ht7_sIVIxKiRovm8jV/view?usp=sharing"  />
                    </div>
                </div>
            </div>
                    </div>
                </div>
            }
        </div>
    )
}
