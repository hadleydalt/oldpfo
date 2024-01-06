import React from 'react'
import '../css/App.css';
import { TitleBox } from './TitleBox'
import { PageNav } from './PageNav'
import { Instagram, LinkedIn, Mail, GitHub } from '../Icons'

export const Sidebar = (props) => {

    const width = props.width

    return (
        <div className="sidebar" style={{width: width < 877 ? "100vw" : "20vw", height : width < 877 ? "10vh" : "100vh", zIndex: width < 877 ? 4 : 3}}>
          <TitleBox expanded={width < 877} />
          <div className="sidebar-desc">
            <div className="serif">I'm Hadley.</div>
            <div className="small">A cross-disciplinary developer, experimental aestheticist, and lover of the details. In the Dual Degree Progam at Brown University and the Rhode Island School of Design,</div>
            <div className="small">I design projects that enable new possibilities and make a difference in people's lives!</div>
            <div className="small-serif">Want to work together? Let me know at <b>hadley_dalton@brown.edu</b></div>
          </div>
          <div className="bottom-bar">
            <PageNav handleSwitch={props.handleSwitch} />
            <div className="bottom-in">
              <div className="sidebar-icons">
                <a href="https://www.linkedin.com/in/hadley-dalton-057041188/"><LinkedIn /></a>
                <a href="mailto:hadley_dalton@brown.edu" style={{color: "black"}}><Mail /></a>
                <a href="http://github.com/hadleydalt"><GitHub /></a>
                <a href="http://instagram.com/hadleysart"><Instagram /></a>
              </div>
              <div className="sidebar-cp">
                Hadley Dalton © 2023
              </div>
              <div className="sidebar-lastupdated">
                Site was last updated on January 6, 2024
              </div>
            </div>
          </div>
        </div>
    )
}