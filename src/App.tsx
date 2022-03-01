import { useEffect, useState } from 'react'
import './styles.css'

function App() {


  const [secondsAmount, setSecondsAmount] = useState(25 * 60) // 25 minutos

  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60


  useEffect(() => {
    setTimeout(() => {
      if (secondsAmount === 0) {
        return;
      }
      setSecondsAmount(state => state - 1)
    }, 1000)
  }, [secondsAmount])

  Audio

  return (
    <div className="Container">
      <main className='Content'>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </main>
    </div>
  )
}

export default App
