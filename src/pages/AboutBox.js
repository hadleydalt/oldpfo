import React from "react"
import '../css/App.css';

export const AboutBox = (props) => {

    const [text, setText] = React.useState(0)

    function handleClick() {
        text === 0 ? setText(1) : setText(0)
    }

    return (
        <div className="about-wrapper">
                <img className="about-bg" src={require("../graphics/PinkBg.jpg")} alt=""/>
                <div className="about-interior">
                  <div>
                  <img style={{width: "20vw", marginTop: "-20vh", marginLeft: "-5vw", position: "absolute"}} src={require("../graphics/avatar.png")} alt="" />
                  <img style={{width: "12vw", marginTop: "-9vh", marginLeft: "10vw", position: "absolute"}} src={require("../graphics/initials.png")} alt="" />
                  <div className="about-title">Hadley Dalton</div>
                  </div>
                  <div className="about-container">
                  <div className="favs-box">
                    <div className="stats"> {"> "}Currently</div>
                    <div className="project-list" style={{marginLeft: "0vw", paddingTop: "1vh", color: "#725a28", borderBottom: "1px solid rgba(191, 163, 20, 0.5)"}}><span className="project-name">➛ Working on</span> A communal wiki with a LAMP stack </div>
                    <div className="project-list" style={{marginLeft: "0vw", paddingTop: "1vh", color: "#725a28", borderBottom: "none"}}><span className="project-name">➛ Finished</span> Cat Finder (an adventure game) </div>
                    <div className="stats"> {"> "}Favorites</div>
                    <div className="project-list" style={{marginLeft: "0vw", paddingTop: "1vh", color: "#725a28", borderBottom: "1px solid rgba(191, 163, 20, 0.5)"}}><span className="project-name">➛ Aesthetic</span> <a href="https://i.pinimg.com/originals/9e/30/7f/9e307f61cfec30b67a901541dd0a2d8a.jpg" style={{color: "#725a28", textDecoration: "none"}}>Pink vintage desktop</a> </div>
                    <div className="project-list" style={{marginLeft: "0vw", paddingTop: "1vh", color: "#725a28", borderBottom: "1px solid rgba(191, 163, 20, 0.5)"}}><span className="project-name">➛ Creative outlet</span> <a href="https://blender.org" style={{color: "#725a28", textDecoration: "none"}}>Blender</a> </div>
                    <div className="project-list" style={{marginLeft: "0vw", paddingTop: "1vh", color: "#725a28", borderBottom: "none"}}><span className="project-name">➛ Startup</span> <a href="https://liquiddeath.com" style={{color: "#725a28", textDecoration: "none"}}>Liquid Death</a> </div>
                  </div>
                  <div className="about-box">
                    {text === 0 && <div className="about-text" style={{lineHeight: "4.5vh"}}><span className="about-accent">Hadley</span> <span className="about-small">(HAD-lee)</span> is a student of the Brown|RISD Dual Degree program in Providence, RI. She is interested in developing products to address the issues that people encounter, ranging from a <span class="personal">personal</span> to <span class="macro">macro</span> scale. Despite the ever-expanding capabilities of AI, Hadley believes that empathy is a critical component of any product that utilizes software technology. With her mission and design strategies, she hopes to bridge the gap between technology and empathy, and make a difference in people's lives.</div>}
                    {text === 1 && <div className="about-projects">
                        <div className="scale" />
                        <div className="scale-titles">
                            <div className="scale-title">Personal</div>
                                <div className="project-list"><span className="project-name">➛ Productivity Game</span> Coded a computer game that helps users track their productivity and incentivizes them to be more productive by exchanging hours of productivity for pets and accessories. </div>
                                <div className="project-list"><span className="project-name">➛ Document Storer</span> Developed an IDE for document-based networks that enables individuals and teams to store information like text, webpages, and media on one "canvas". </div>
                                <div className="project-list"><span className="project-name">➛ Performance Monitor</span> Integrated a performance monitoring software into a codebase for Activision Blizzard King, making bugs easily accessible to the whole team and allowing team members to debug issues more easily. </div>
                                <div className="project-list"><span className="project-name">➛ Chronic Pain Tracker</span> Worked with the Brown Center for Computation and Visualization, alongside Prof. Frederike Petzschner, on the development of an app that enables users to track chronic pain. </div>
                                <div className="project-list" style={{borderBottom: "none"}}><span className="project-name">➛ Combatting Infant Disease</span> Developed a webpage for Boston AI Labs, which uses AI to detect and combat ROP in infants. The webpage presents information to visitors in the most accessible way. </div>
                            <div className="scale-title">Macro</div>
                        </div>
                        </div>}
                    <div className="about-accent" onClick={handleClick} style={{marginLeft: text === 1 ? "85%" : "75%", marginTop: "-3vh", cursor: "pointer"}}>{text === 0 ? "Impact so far →" : "Back →"}</div>
                  </div>
                  </div>
                </div>
              </div>
    )
}