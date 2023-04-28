import Screen from './components/Screen'
import Button from './components/Button'

const btnValues = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0, '=', 'C'],
  ['+', '-', '*']
]

function App() {
  return (
    <div className="wrapper">
      <Screen />
      <div className="buttonBox">
        {btnValues.flat().map((btn, i) => (
          <Button
            value={btn}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default App
