import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Banner />
    </>
  )
}

export default App
