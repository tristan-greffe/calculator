import React from 'react'
import { useState, useEffect } from 'react'
import BaseNumberInput from './BaseNumberInput'
import _ from 'lodash'

function Binary() {
  const [binaryNumber, setBinaryNumber] = useState('')
  const [decimalNumber, setDecimalNumber] = useState('')
  const [focus, setFocus] = useState('DECIMAL NUMBER')

  const handleFocus = (value) => {
    setFocus(value)
  }

  const handleChange = (number, base) => {
    base === 2 ? setBinaryNumber(_.toNumber( number ).toString(2)) : setDecimalNumber(parseInt(_.toNumber( number ), 2))
  }

  return (
    <div className="wrapper">
      {focus === 'BINARY NUMBER'&&
        <React.Fragment>
          <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={'DECIMAL NUMBER'} value={decimalNumber} />
          <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={'BINARY NUMBER'} />
        </React.Fragment>
      }
      {focus === 'DECIMAL NUMBER'&&
        <React.Fragment>
          <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={'DECIMAL NUMBER'} />
          <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={'BINARY NUMBER'} value={binaryNumber} />
        </React.Fragment>
      }      
    </div>
  )
}

export default Binary