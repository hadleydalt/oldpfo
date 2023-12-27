import React from 'react'
import '../css/App.css';

export const TitleBox = (props) => {

    const expanded = props.expanded

    return (
        <div className="Title-box-wrapper" style={{width: expanded ? "50vw": "20vw"}}>
            <div className="Title-box" style={{width: expanded ? "40vw" : "14vw"}}>
                <div className="Title-box-border" style={{width: expanded ? "39vw" : "13.5vw"}}/>
                <div className="Title-box-text" style={{fontSize: expanded ? "4vw" : "1.5vw"}}>
                    Hello!
                </div>
                <div className="Title-box-box-row">
                    <div className="Title-box-box" />
                    <div className="Title-box-box" />
                    <div className="Title-box-box" />
                </div>
                <div className="Title-box-circle-row">
                    <div className="Title-box-circle">
                        <div className="Title-box-inner-circle" />
                    </div>
                    <div className="Title-box-circle">
                        <div className="Title-box-inner-circle" />
                    </div>
                </div>
                <div className="Title-box-spacer" />
                <div className="Title-box-circle-row">
                    <div className="Title-box-circle">
                        <div className="Title-box-inner-circle" />
                    </div>
                    <div className="Title-box-circle">
                        <div className="Title-box-inner-circle" />
                    </div>
                </div>
                <div className="Title-box-box-row">
                    <div className="Title-box-box" />
                    <div className="Title-box-box" />
                    <div className="Title-box-box" />
                </div>
            </div>
        </div>
    )
}