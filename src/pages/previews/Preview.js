import React from 'react'
import '../../css/App.css'

export const Preview = (props) => {
    const index = props.index
    const date = props.date
    const title = props.title
    const classInfo = props.classInfo
    const skills = props.skills
    const tools = props.tools
    const info = props.info


    return (
        <div className="preview-wrapper">
            <img className="preview-image" src={require("../../graphics/" + String(index) + ".png")} alt="" style={{objectFit: "cover"}}/>
            <div className="preview-text-wrapper">
                <div className="preview-text-date">
                <b>{index + ". "} </b>{date}
                </div>
                <div className="preview-text-title">
                    {title}
                </div>
                <div className="preview-text-info-wrapper">
                    <div className="preview-text-info">
                        <div>Class <span className="info">{classInfo}</span></div>
                        <div>Skills <span className="info">{skills}</span></div>
                        <div>Tools <span className="info">{tools}</span></div>
                    </div>
                    <div className="preview-text-info" style={{borderLeft: "1px solid black", paddingLeft: "0.5vw", lineHeight: "2.5vh"}}>
                        <div className="info">{info}</div>
                        <div className="hi">Click for more ➛</div>
                    </div>
                </div>
            </div>
        </div>
    )
}