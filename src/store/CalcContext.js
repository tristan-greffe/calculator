/* eslint-disable no-eval */
import { createContext, useReducer } from 'react'
import _ from 'lodash'

export const CalcContext = createContext()

export const CalcProvider = ({ children }) => {
  const initialState = { 
    num: '0',
    calc: '',
    prevRes: 0,
    res: null
  }

  const reducer = (state, action) =>{
    switch(action.type){
      case 'ADD_NUMBER_CALC':
        let num = null
        if (state.num === '0' && action.payload === '0') num = '0'
        if (state.num === '0' && action.payload !== '0') num = action.payload
        if (state.num !== '0') num = state.num + action.payload
        return {
          ...state,
          res: null,
          num: num
        }
      case 'SYMBOL_CALC':
        return {
          num: '0',
          res: null,
          prevRes: eval(state.calc + state.num),
          calc: _.toString( eval(state.calc + state.num) ) + action.payload
        }
      case 'RESULT_CALC':
        return {
          ...state,
          num: '',
          calc: state.calc + state.num,
          res : eval(state.calc + state.num) 
        }
      case 'RESET_CALC':
        return { 
          num: '0',
          calc: '',
          prevRes: 0,
          res: null
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CalcContext.Provider value={[state, dispatch]}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcContext
