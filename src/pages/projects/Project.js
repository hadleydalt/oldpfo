import React from 'react'
import '../../css/App.css'
import { Text } from './ProjectText'
import { Dates, Titles, ClassInfo, Skills, Tools, Info } from '../previews/WorkInfo'

export const Project = (props) => {
    const id = props.id

    const index = id + 1
    const date = Dates[id]
    const title = Titles[id]
    const classInfo = ClassInfo[id]
    const skills = Skills[id]
    const tools = Tools[id]
    const info = Info[id]


    return (
        <div className="project-wrapper">
            <div className="footer"
                    style={{cursor: "pointer", marginTop: "2vh"}}
                >
                    <div 
                        onClick={props.last}
                        className="footer-left">↤ Last Project</div>
                    <div 
                        onClick={props.home}
                        className="footer-middle">Home</div>
                    <div 
                        onClick={props.next}
                        className="footer-right">Next Project ↦</div>
                </div>
                        <img className="project-image" src={require("../../graphics/previews/" + String(index) + ".png")} alt="" style={{objectFit: "cover"}}/>
            <div className="preview-text-wrapper" 
                style={{height: "50%"}}>
                <div className="preview-text-date"
                    style={{
                        fontSize: "1vw",
                        display: "flex", 
                        alignItems: "flex-end"
                    }}
                ><b>{index + ". "} </b>{date}</div>
                <div className="preview-text-title"
                    style={{
                        fontSize: "2.5vw",
                        height: "15%"
                    }}
                >{title}</div>
                <div className="preview-text-info-wrapper"
                    style={{height: "30%"}}
                >
                    <div className="preview-text-info"
                        style={{
                            fontSize: "1.2vw"
                        }}
                    >
                        <div>Class <span className="project-info">{classInfo}</span></div>
                        <div>Skills <span className="project-info">{skills}</span></div>
                        <div>Tools <span className="project-info">{tools}</span></div>
                    </div>
                    <div className="preview-text-info" style={{borderLeft: "1px solid black", paddingLeft: "0.5vw", lineHeight: "2.5vh"}}>
                        <div className="project-info"
                            style={{
                                lineHeight: '1.5vw'
                            }}
                        >{info}</div>
                    </div>
                </div>
                <div className="project-text">
                    {Text[id]}
                </div>
                <div className="footer"
                    style={{cursor: "pointer", marginBottom: "2vh"}}
                >
                    <div 
                        onClick={props.last}
                        className="footer-left">↤ Last Project</div>
                    <div 
                        onClick={props.home}
                        className="footer-middle">Home</div>
                    <div 
                        onClick={props.next}
                        className="footer-right">Next Project ↦</div>
                </div>
            </div>
        </div>
    )
}