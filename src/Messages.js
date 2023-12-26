import React from 'react'
import './App.css'

export const Messages = (props) => {

    const width = props.width
    const height = props.height

    return (
        <>
            {width < 500 && 
                <div className="larger-screen-message">
                    Please view on a larger screen!
                </div>
            }
            {(height < 623 || width < 877) && 
                <>
                    <div className="height-message">
                        For best results, please view on a larger screen or maximize your window!
                    </div>
                    <div className="height-message-bg">
                        For best results, please view on a larger screen or maximize your window!
                    </div>
                </>
            }
        </>
    )
}