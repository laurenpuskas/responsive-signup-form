import React from 'react'

import './Input.scss'

const Input = (props) => {
  return (
    <label htmlFor={props.name}>
      {props.label}
      <input type={props.type} name={props.name} />
    </label>
  )
}

export default Input
