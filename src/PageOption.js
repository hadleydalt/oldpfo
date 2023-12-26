import './App.css';
import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export const PageOption = (props) => {

  const [hovered, setHovered] = React.useState(false)
  
  const style = useSpring({
    width: hovered ? "62%" : "0%"
  })

  React.useEffect(() => {
    if (!hovered) {
        return
    }
}, [hovered, 100])

  return (
    <div className="page-option" 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <animated.div
            className="page-option-hovered"
            style={{ width: style.width}}
         />
            {props.name}
    </div>
  )
}