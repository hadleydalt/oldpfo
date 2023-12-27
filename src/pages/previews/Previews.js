import React from 'react'
import '../../css/App.css'
import { Preview } from './Preview'
import { Dates, Titles, ClassInfo, Skills, Tools, Info } from './WorkInfo'

export const Previews = (props) => {

    return (
      <div className="previews-wrapper">
      {Dates.map((date, index) => {
        return (
          <Preview index={index + 1} date={date} title={Titles[index]} classInfo={ClassInfo[index]} skills={Skills[index]} tools={Tools[index]} info={Info[index]} />
        )
      })}

      </div>
    )
}