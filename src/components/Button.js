import { useContext } from 'react'
import CalcContext from '../store/CalcContext'
import _ from 'lodash'

function Button({ value }) {
  const [state, dispatch] = useContext(CalcContext)

  const handleButtonClick = () => {
    switch(value) {
      case '+':
        return dispatch({ type : 'SYMBOL_CALC', payload: value })
      case '-':
        return dispatch({ type : 'SYMBOL_CALC', payload: value })
      case '*':
        return dispatch({ type : 'SYMBOL_CALC', payload: value })
      case 'C':
        return dispatch({ type : 'RESET_CALC' })
      case '=':
        return dispatch({ type : 'RESULT_CALC' })
      default:
        return dispatch({ type : 'ADD_NUMBER_CALC', payload: _.toString(value) })
    }
  }

  return (
    <button onClick={handleButtonClick} className="button">{value}</button>
  )
}

export default Button