import React from 'react'
import './App.css'

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
            <div className="preview-image"></div>
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
                    <div className="preview-text-info">
                        <div className="info">{info}</div>
                        <div className="hi">Click for more ➛</div>
                    </div>
                </div>
            </div>
        </div>
    )
}