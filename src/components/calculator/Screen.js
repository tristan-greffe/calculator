import { useContext } from 'react'
import CalcContext from '../../store/CalcContext'
import { Textfit } from 'react-textfit'

function Screen() {
  const [state, dispatch] = useContext(CalcContext)

  return (
    <Textfit className="screen">{state.res || state.res === 0 ? state.res : state.num}</Textfit>
  )
}

export default Screen
