import React from 'react'
import '../css/App.css'

export const ColVisuals = (props) => {

    const titles = ["Title 1", "Title 2", "Title 3"]
    const descs = ["Desc 1", "Desc 2", "Desc 3"]

    return (
        <div className="col-visual-wrapper">
            {titles.map((title, index) => {
                return (
                    <div key={index} className="col-visual-unit">
                        <div className="col-visual-image"></div>
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