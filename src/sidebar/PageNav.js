import React from 'react'
import '../css/App.css'
import { PageOption } from './PageOption'

export const PageNav = (props) => {

    const names = ["Home →", "Work →", "Archive →"]
    const tasks = ["", props.handleSwitch, ""]

    return (
        <div className="page-nav">
            {names.map((n, index) => {
                return (
                    <PageOption key={index} name={n} task={tasks[index]} />
                )
            })}
        </div>
    )
}