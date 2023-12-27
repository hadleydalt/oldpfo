import React from 'react'
import '../css/App.css'

export const Image = (props) => {

    return (
        <div>
            <img src={require('../graphics/' + props.source + '.png')} alt="" style={{height: "auto", width: props.width}} draggable={false}/>
        </div>
    )
}