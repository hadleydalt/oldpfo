import './App.css';
import React from 'react'
import { animated, useSpring } from '@react-spring/web'

export const PageOption = (props) => {

  const [hovered, setHovered] = React.useState(false)

  const navStyle = useSpring({
    from: {
      marginLeft: "-62%",
      width: "0%"
    },
    to: {
      marginLeft: "0%",
      width: "62%"
    }
  })

  function handleMouseEnter() {
    setHovered(true)
  }

  function handleMouseLeave() {
    setHovered(false)
  }

  return (
    <div className="page-option">
        <animated.div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="page-option-hovered" 
            style={navStyle} />
            {props.name}
    </div>
  )
}