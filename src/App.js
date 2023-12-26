import './App.css';
import React from 'react'
import { useWindowDimensions } from './Functions'
import { SplashPage } from './SplashPage'
import { Sidebar } from './Sidebar'
import { Previews } from './Previews'
import { Messages } from './Messages'

function App() {

  const { height, width } = useWindowDimensions()
  const [scrollPos, setScrollPos] = React.useState(0)
  

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
            <div className="previews-wrapper">
              <Previews />
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;