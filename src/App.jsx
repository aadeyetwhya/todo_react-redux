import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './Component/Addtodo'
import ShowTodo from './Component/ShowTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="w-full h-screen bg-black">
   
        {/* <!-- Your content goes here --> */}
        <Addtodo />
        <ShowTodo />
      </div>
    </>
  )
}

export default App
