import React from 'react'
import '../../css/App.css'

export const Preview = (props) => {
    const id = props.id
    const index = id === 102 ? props.index + 7 : id === 103 ? props.index + 18 : props.index
    const date = props.date
    const title = props.title
    const classInfo = props.classInfo
    const skills = props.skills
    const tools = props.tools
    const info = props.info
    


    return (
        <div className="preview-wrapper">
            <img className="preview-image" src={require("../../graphics/previews/" + String(index) + ".png")} alt="" style={{objectFit: "cover"}}/>
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
                        <div>{id === 100 ? "Skills" : "Size"} <span className="info">{skills}</span></div>
                        <div>{id === 100 ? "Tools" : "Media"} <span className="info">{tools}</span></div>
                    </div>
                    <div className="preview-text-info" style={{borderLeft: "1px solid black", paddingLeft: "0.5vw", lineHeight: "2.5vh"}}>
                        <div className="info">{info}</div>
                        {id === 100 && <button
                            onClick={props.handleSwitch}
                            style={{
                                background: "transparent",
                                border: "0",
                                textAlign: "left",
                                cursor: "pointer"
                            }}
                        >
                            <div className="hi">Click for more ➛</div>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}