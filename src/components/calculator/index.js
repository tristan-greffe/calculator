import React from 'react'
import Screen from './Screen'
import Button from './Button'
import _ from 'lodash'

const btnValues = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0, '=', 'C'],
  ['+', '-', '*']
]

function Calculator() {
  return (
    <React.Fragment>
      <Screen />
      <div className="buttonBox">
        {btnValues.flat().map((btn, i) => (
          <Button
            value={btn}
            key={i}
          />
        ))}
      </div>
    </React.Fragment>

  )
}

export default Calculator
