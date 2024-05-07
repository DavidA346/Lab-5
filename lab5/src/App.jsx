import './App.css'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import Articles from './components/Articles'

function App() {

  return (
    <>
    <Title />
    <div className="main-container">
        <Sidebar />
        <div className="article-container">
          <div className="left-articles">
            <Articles />
          </div>
          <div className="right-articles">
            <Articles />
          </div>
        </div>
    </div>
    </>
  )
}

export default App
