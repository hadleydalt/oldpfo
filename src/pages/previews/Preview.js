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
    const margin = props.margin

    const height = props.height

    const [expanded, setExpanded] = React.useState(false)

    function handleExpand() {
        setExpanded(!expanded)
    }
    


    return (
        <div className="preview-wrapper">
            <img className="preview-image" src={require("../../graphics/previews/" + String(index) + ".png")} alt="" onClick={id > 100 ? handleExpand : null} style={{zIndex: expanded ? 2 : 1, position: expanded ? "absolute" : "relative", height: expanded ? height : "70%", width: expanded ? "auto" : "100%", objectFit: "cover", filter: expanded ? "drop-shadow(10px 10px 10px black)" : "none", marginLeft: expanded ? margin : "0"}}/>
            {expanded && <div className="expand-message">Click again to reduce size</div>}
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
                        {id>100 && <div className="hi">Click image to expand it</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}