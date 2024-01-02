import '../css/App.css';
import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export const PageOption = (props) => {

  const [hovered, setHovered] = useState(false)
  
  const style = useSpring({
    width: hovered ? "62%" : "0%",
    color: hovered ? "#FFF9E6" : "rgba(0,0,0,0)",

  })

  useEffect(() => {
    if (!hovered) {
        return
    }
}, [hovered])

  return (
      <div className="page-option" 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={
          props.task
        }
    >
        <animated.div
            className="page-option-hovered"
            style={style}
         >{props.name}</animated.div>
            <div className="page-option-text">{props.name}</div>
    </div>
  )
}