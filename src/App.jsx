import React from 'react'
import './App.css'

function App() {
  const [color, setColor] = React.useState("lightblue")

  const colors = [
    { name: 'Blue', value: 'blue', textColor: 'white' },
    { name: 'Green', value: 'green', textColor: 'white' },
    { name: 'White', value: 'white', textColor: 'black' },
    { name: 'Purple', value: 'purple', textColor: 'white' },
    { name: 'Red', value: 'red', textColor: 'white' }
  ]

  return (
    <div className='main' style={{ backgroundColor: color }}>
      <div className='all-btns'>
        {colors.map((col) => (
          <button
            key={col.value}
            onClick={() => setColor(col.value)}
            style={{ backgroundColor: col.value, color: col.textColor }}
          >
            {col.name}

          </button>
        ))}
      </div>
    </div>

  )
}

export default App
