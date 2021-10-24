import React, { useState, useEffect, useRef } from 'react'

function App() {
  // test for initial render
  const firstRender = useRef(true)

  // set initial input states
  const [name, setName] = useState('')

  // set intial error states
  const [nameError, setNameError] = useState(null)

  // set initial button state to disabled
  const [disabled, setDisabled] = useState(true)

  // update every time input values change
  useEffect(() => {
    // skip validation on first render
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    // update disabled status based on true/false function return
    setDisabled(formValidation())
  }, [name])

  // run validation and return true/false
  const formValidation = () => {
    // validate
    if (name === '') {
      setNameError('Name cannot be blank')
      return true
    } else {
      setNameError(null)
      return false
    }
  }

  // handle form submission
  const formSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="wrapper">
      <form onSubmit={formSubmit}>
        <label htmlFot="name">Name:</label>
        {''}
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        {nameError && <p>{nameError}</p>}

        <button type="submit" disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
