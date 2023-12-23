import React from 'react'
import './App.css'

export const Image = (props) => {

    return (
        <div>
            <img src={require('./' + props.source + '.png')} alt="" style={{height: "auto", width: props.width}}/>
        </div>
    )
}