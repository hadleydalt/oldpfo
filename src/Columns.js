import React from 'react'
import './App.css'
import { Box1 } from './Box1'
import { Box2 } from './Box2'
import { Notepad } from './Notepad'
import { Image } from './Image'
import { PaintBox } from './PaintBox'
import { ThreeButtons } from './ThreeButtons'
import { squareButtonNames } from './Constants'
import { nonSquareButtonNames } from './Constants'

export const Col1 = (props) => {

    const width = props.width

    return (
        <div className="sp-col-1">
                <>
                    <Box1 planet={true} bg={true} height={290}/>
                    {width < 1370 &&
                        <div className="buttons-col-1">
                            <ThreeButtons square={false} names={nonSquareButtonNames} />
                            <ThreeButtons square={true} names={squareButtonNames} />
                        </div>
                    }
                    {width >= 1370 && <ThreeButtons square={true} names={squareButtonNames} />}
                </>
        </div>
    )
}

export const Col2 = () => {
    return (
        <div className="sp-col-2">
            <Box2 height={220}/>
            <div className="icons-container">
                <Image source='Papers' width={130}/>
                <Image source='Folder' width={130}/>
            </div>
            <PaintBox />
        </div>
    )
}

export const Col3 = () => {
    return (
        <div className="sp-col-3">
            <Notepad height={330}/>
            <ThreeButtons square={false} names={nonSquareButtonNames} />
        </div>
    )
}