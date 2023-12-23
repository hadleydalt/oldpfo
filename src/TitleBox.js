import React from 'react'
import './App.css'

export const TitleBox = (props) => {

    return (
        <div className="Title-box-wrapper">
            <div className="Title-box">
                <div className="Title-box-border"></div>
                <div className="Title-box-text">
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


/*

<div className="Title-box-box" style={{marginTop: "-0.8vh", marginLeft: "-0.5vw"}} />
                <div className="Title-box-box" style={{marginTop: "-0.8vh", marginLeft: "6.5vw"}} />
                <div className="Title-box-box" style={{marginTop: "-0.8vh", marginLeft: "13.4vw"}} />
                <div className="Title-box-box" style={{marginTop: "9.5vh", marginLeft: "-0.5vw"}} />
                <div className="Title-box-box" style={{marginTop: "9.5vh", marginLeft: "6.5vw"}} />
                <div className="Title-box-box" style={{marginTop: "9.5vh", marginLeft: "13.4vw"}} />


                <div className="Title-box-text">
            <div className="Title-box-circle" style={{marginTop: "2vh", marginLeft: "-0.4vw"}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box-circle" style={{marginTop: "6.5vh", marginLeft: "-0.4vw"}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box-circle" style={{marginTop: "2vh", marginLeft: "13.5vw"}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box-circle" style={{marginTop: "6.5vh", marginLeft: "13.5vw"}}>
                <div className="Title-box-inner-circle" />
                
            </div>
                Hello!
            </div>

            */