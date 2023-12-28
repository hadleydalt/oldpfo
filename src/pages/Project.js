import React from 'react'
import '../css/App.css'
import { ColVisuals } from './ColVisuals'

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
            <div className="preview-text-wrapper" 
                style={{height: "50%"}}>
                <div className="preview-text-date"
                    style={{
                        fontSize: "1vw",
                        display: "flex", 
                        alignItems: "flex-end"
                    }}
                ><b>1. </b>January 2023</div>
                <div className="preview-text-title"
                    style={{
                        fontSize: "2.5vw",
                        height: "15%"
                    }}
                >Project Title</div>
                <div className="preview-text-info-wrapper"
                    style={{height: "30%"}}
                >
                    <div className="preview-text-info"
                        style={{
                            fontSize: "1.2vw"
                        }}
                    >
                        <div>Class <span className="project-info">Class with teacher</span></div>
                        <div>Skills <span className="project-info">Skill, skill, skill</span></div>
                        <div>Tools <span className="project-info">Tool, tool</span></div>
                    </div>
                    <div className="preview-text-info" style={{borderLeft: "1px solid black", paddingLeft: "0.5vw", lineHeight: "2.5vh"}}>
                        <div className="project-info">Info info info</div>
                    </div>
                </div>
                <div className="project-text">
                    <div className="h1">Hello</div>
                    <div>HI difj difj idfj fj <span className="accent">hi</span> dkfj</div>
                    <div className="project-visual"></div>
                    <ColVisuals />
                </div>
            </div>
        </div>
    )
}