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