import './App.css'
import {useState, useEffect} from 'react'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import Articles from './components/Articles'

function App() {
  const [most, SetMost] = useState("Default Title");
  const [time, SetTime] = useState("Default Period");
  const [num, SetNum] = useState(1);

  return (
    <>
    <header className='App-header'>
      <Title titleMost={most} titleTime={time} titleNum={num}/>
    </header>
    <div className="main-container">
        <Sidebar mostFunction = {SetMost} timeFunction = {SetTime} numFunction = {SetNum}> </Sidebar>
        <div className="article-container">
          <Articles articleMost = {most} articleTime = {time} articleNum = {num}/>
        </div>
    </div>
    </>
  )
}

export default App
