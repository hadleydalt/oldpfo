import './css/App.css';
import React from 'react'
import { useWindowDimensions } from './Functions'
import { SplashPage } from './splash-page/SplashPage'
import { Sidebar } from './sidebar/Sidebar'
import { Project } from './pages/Project'
import { Preview } from './pages/previews/Preview'
import { Dates, Titles, ClassInfo, Skills, Tools, Info } from './pages/previews/WorkInfo'
import { Messages } from './Messages'

function App() {

  const { height, width } = useWindowDimensions()
  const [scrollPos, setScrollPos] = React.useState(0)
  const [project, setProject] = React.useState(100)
  

  const handleScroll = () => {
    const pos = window.scrollY
    setScrollPos(pos)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: 'true' })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const opacity = 1.0 - (scrollPos / height)

  function handleSwitch(num) {
    setProject(num)
  }

  return (
    <div className="App">
      <Messages width={width} height={height} />
      {width >= 500 &&
        <>
          <div className="first-page">
            <Sidebar width={width} />
            <div className="splash-page-wrapper">
              <SplashPage width={width} opacity={opacity} />
            </div>
          </div>
          <div className="second-page">
            {project===100 && 
              <div className="previews-wrapper">
              {Dates.map((date, index) => {
                return (
                  <Preview index={index + 1} date={date} title={Titles[index]} classInfo={ClassInfo[index]} skills={Skills[index]} tools={Tools[index]} info={Info[index]} handleSwitch={() => {handleSwitch(index)}} />
                )
              })}
              </div>
            }
            {project!==100 && <Project id={project} />}
          </div>
        </>
      }
    </div>
  );
}

export default App;