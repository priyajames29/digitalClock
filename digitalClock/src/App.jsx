import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { StarRating } from './StarRating'

function App() {
  const [time, setTime] = useState(new Date())
  const hour = time.getHours()
  const minutes = time.getMinutes()
  const sec = time.getSeconds()

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date())
  //   }, 1000)
  // }, [])

  return (
    <div id="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30rem', flexDirection: 'column' }}>
      <div id="clock" style={{ display: 'flex', fontSize: 'large', backgroundColor: 'white', height: '5rem', width: '10rem', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
        <div>{time.getDate()}:</div>
        <div>
          <span>{hour}</span>:<span>{minutes}</span>:<span>{sec}</span>
        </div>
      </div>
      <div style={{display: 'flex', gap: '10px'}}>
        <StarRating />
      </div>
    </div>
  )
}

export default App
