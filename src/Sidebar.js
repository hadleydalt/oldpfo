import React from 'react'
import './App.css'
import { TitleBox } from './TitleBox'
import { PageOption } from './PageOption'
import { LinkedIn } from './LinkedIn'
import { Mail } from './Mail'
import { GitHub } from './Github'
import { Instagram } from './Instagram'

export const Sidebar = (props) => {

    const width = props.width

    return (
        <div className="sidebar" style={{width: width < 877 ? "100vw" : "20vw", height : width < 877 ? "10vh" : "100vh", zIndex: width < 877 ? 4 : 3}}>
          <TitleBox expanded={width < 877} />
          <div className="sidebar-desc">
            <div className="serif">I'm Hadley.</div>
            <div className="small">A cross-disciplinary developer, experimental aestheticist, and lover of the details. I design projects that enable new possibilities.</div>
            <div className="small">I'm hoping to do so in meaningful ways that make a difference in people's lives!</div>
            <div className="small-serif">Want to work together? Let me know at <b>hadley_dalton@brown.edu</b></div>
          </div>
          <div className="bottom-bar">
            <div className="page-nav">
              <PageOption name="Home →" />
              <PageOption name="Work →" />
              <PageOption name="Archive →" />
            </div>
            <div className="bottom-in">
              <div className="sidebar-icons">
                <LinkedIn />
                <Mail />
                <GitHub />
                <Instagram />
              </div>
              <div className="sidebar-cp">
                Hadley Dalton © 2023
              </div>
              <div className="sidebar-lastupdated">
                Site was last updated on December 30, 2023
              </div>
            </div>
          </div>
        </div>
    )
}