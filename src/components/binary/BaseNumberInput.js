import { useRef, useEffect } from 'react'

function BaseNumberInput({ onChangeBase, placeholder, value, handleFocus }) {
  const inputRef = useRef()

  useEffect(() => {

  },);

  const handleChange = e => {
    placeholder === 'BINARY NUMBER' ? onChangeBase( e.target.value, 10 ) : onChangeBase( e.target.value, 2 )
  }

  const handleChangeFocus = e => {
    handleFocus(placeholder)
  }
  
  return (
    <input type="text" onFocus={handleChangeFocus} placeholder={placeholder} onChange={handleChange} value={value}/>
  )
}

export default BaseNumberInput
