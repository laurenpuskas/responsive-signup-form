import React from 'react'

import './Hero.scss'

const Hero = (props) => {
  return <div className="hero-wrapper">{props.children}</div>
}

export default Hero
