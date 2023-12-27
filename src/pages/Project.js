import React from 'react'
import '../css/App.css'

export const Project = (props) => {
    const index = props.index
    const date = props.date
    const title = props.title
    const classInfo = props.classInfo
    const skills = props.skills
    const tools = props.tools


    return (
        <div className="project-wrapper">
            <div className="project-image"></div>
            <div className="preview-text-wrapper" style={{height: "50%"}}>
                <div className="preview-text-date"></div>
                <div className="preview-text-title"></div>
                <div className="preview-text-info-wrapper"></div>
            </div>
        </div>
    )
}