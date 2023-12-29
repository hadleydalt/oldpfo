import React from 'react'
import '../css/App.css'

export const ColVisuals = (props) => {

    const titles = props.titles
    const descs = props.descs
    const images = props.images
    const suffix = props.video ? ".mp4" : ".png"

    return (
        <div className="col-visual-wrapper">
            {titles.map((title, index) => {
                return (
                    <div key={index} className="col-visual-unit">
                        {props.video && <video className="col-visual-image" controls>
                            <source src={require("../graphics/" + images[index] + suffix)} type="video/mp4" style={{objectFit: "cover"}} />
                        </video>}
                        {!props.video && <img className="col-visual-image" src={require("../graphics/" + images[index] + suffix)} alt="" style={{objectFit: "cover"}}></img>
                        }
                        <div className="col-visual-desc">
                            <div className="h2">{title}</div>
                            {descs[index]}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}