import './App.css'
import {useState, useEffect} from 'react'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import Articles from './components/Articles'

function App() {
  const [most, SetMost] = useState("Default Title");
  const [time, SetTime] = useState("Default Period");

  return (
    <>
    <header className='App-header'>
      <Title titleMost={most} titleTime={time}/>
    </header>
    <div className="main-container">
        <Sidebar mostFunction = {SetMost} timeFunction = {SetTime}> </Sidebar>
        <div className="article-container">
          <div className="left-articles">
            <Articles/>
          </div>
          <div className="right-articles">
            <Articles/>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
