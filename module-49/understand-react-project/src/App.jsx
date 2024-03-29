import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divice from './assets/component/Divice/Divice'
import Watch from './assets/component/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Divice name="Uphone" price="120000"></Divice>
      <Divice name="Samsung" price="420000"></Divice>
      <Watch></Watch>
    </>
  )
}

export default App
