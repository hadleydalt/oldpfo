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

  const squareButtonNames = ["op1", "op2", "op3"]
  const nonSquareButtonNames =["op1", "op2", "op3"]

  const squareButtons = <ThreeButtons square={true} names={squareButtonNames} />
  const nonSquareButtons = <ThreeButtons square={false} names={nonSquareButtonNames} />

  return (
    <div className="App">
      {width < 500 && <div className="larger-screen-message">
        Please view on a larger screen!
      </div>}
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
      {width >= 500 &&
      <>
      <div className="first-page">
        <div className="sidebar" style={{width: width < 877 ? "100vw" : "20vw", height : width < 877 ? "10vh" : "100vh", zIndex: width < 877 ? 4 : 3}}>
          <TitleBox expanded={width < 877} />
        </div>
        <div className="first-wrapper">
          <Vertical color="#EEDFB1" opacity={opacity}/>
          <Horizontal color="#EEDFB1" opacity={opacity}/>
          <div className="splash-page" style={{justifyContent: width < 1370 ? "space-evenly" : "space-between", marginTop: width < 877 ? "20vh" : "0"}}>
              <div className="sp-col-1">
                <Box1 planet={true} bg={true} height={290}/>
                {width < 1370 &&
                <div className="buttons-col-1">
                  {nonSquareButtons}
                  {squareButtons}
                </div>
                }
                {width >= 1370 && squareButtons}
              </div>
              {width < 877 &&
              <div className="sp-col-1">
                <Notepad height={330}/>
                <div className="icons-container">
                  <Image source='Papers' width={130}/>
                  <Image source='Folder' width={130}/>
                </div>
              </div>
              }
              {width >= 877 && <div className="sp-col-2">
                <Box2 height={220}/>
                <div className="icons-container">
                  <Image source='Papers' width={130}/>
                  <Image source='Folder' width={130}/>
                </div>
                <PaintBox />
              </div>}
              {width >= 1370 && <div className="sp-col-3">
                <Notepad height={330}/>
                {nonSquareButtons}
              </div>}
          </div>
        </div>
      </div>
      <div className="second-page">
        <div style={{height: '100vh', width: 200, marginTop: 50}}>
          Testing box
        </div>
      </div>
      </>}
    </div>
  );
}

export default App;