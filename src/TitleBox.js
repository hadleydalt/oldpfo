import React from 'react'
import './App.css'

export const TitleBox = (props) => {

    return (
        <div className="Title-box-wrapper">
            <div className="Title-box-box" style={{marginTop: -3, marginLeft: -3}} />
            <div className="Title-box-box" style={{marginTop: -3, marginLeft: 163}} />
            <div className="Title-box-box" style={{marginTop: -3, marginLeft: 337}} />
            <div className="Title-box-box" style={{marginTop: 67, marginLeft: -3}} />
            <div className="Title-box-box" style={{marginTop: 67, marginLeft: 163}} />
            <div className="Title-box-box" style={{marginTop: 67, marginLeft: 337}} />

            <div className="Title-box-circle" style={{marginTop: 10, marginLeft: 10}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box-circle" style={{marginTop: 50, marginLeft: 10}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box-circle" style={{marginTop: 10, marginLeft: 318}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box-circle" style={{marginTop: 50, marginLeft: 318}}>
                <div className="Title-box-inner-circle" />
            </div>
            <div className="Title-box">
                Hello my name is...
            </div>
        </div>
    )
}