import React from 'react'
import './css/App.css'

export const Messages = (props) => {

    const width = props.width
    const height = props.height

    return (
        <>
            {(height < 623 || width < 877) && 
                <>
                    <div className="height-message">
                        For best results, please view on a larger screen or maximize your window!
                        <img src={require("./graphics/phonelaptop.png")} alt="" style={{width: "70%"}}/>
                    </div>
                    <div className="height-message-bg">
                    </div>
                </>
            }
        </>
    )
}
