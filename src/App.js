import './App.css';
import React from 'react'
import { useWindowDimensions } from './Functions'
import { Box1 } from './Box1'
import { Box2 } from './Box2'
import { Notepad } from './Notepad'
import { TitleBox } from './TitleBox'
import { ThreeButtons } from './ThreeButtons'
import { Vertical } from './Vertical'
import { Horizontal } from './Horizontal'
import { Image } from './Image'
import { PaintBox } from './PaintBox'

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
      <div className="first-page">
        <div className="sidebar">
          <TitleBox />
        </div>
        <div className="first-wrapper">
          <Vertical color="#EEDFB1" opacity={opacity}/>
          <Horizontal color="#EEDFB1" opacity={opacity}/>
          <div className="splash-page">
              <div className="sp-col-1">
                <Box1 planet={true} bg={true} height={290}/>
                <ThreeButtons square={true}/>
              </div>
              <div className="sp-col-2">
                <Box2 height={220}/>
                <div className="icons-container">
                  <Image source='Papers' width={130}/>
                  <Image source='Folder' width={130}/>
                </div>
                <PaintBox />
              </div>
              <div className="sp-col-3">
                <Notepad height={330}/>
                <ThreeButtons square={false}/>
              </div>
          </div>
        </div>
      </div>
      <div className="second-page">
        <div style={{height: '100vh', width: 200}}>
          Testing box
        </div>
      </div>
    </div>
  );
}

export default App;


/* 

splash page

              <Box1 planet={true} bg={true} height={290}/>
              <Box2 height={220}/>
              <Notepad height={330}/>
              <ThreeButtons square={true}/>
              <ThreeButtons square={false}/>

*/