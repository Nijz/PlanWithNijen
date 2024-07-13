import { useState } from 'react'
import './App.css'
import data from './Constants/data'
import Tours from './Components/Tours'

function App() {

  const [tours, setTours] = useState(data)

  return (
    <div>
      <Tours tours={tours}/>
    </div>
  )
}

export default App
