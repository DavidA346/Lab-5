import './App.css'
import {useState, useEffect} from 'react'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import Articles from './components/Articles'

const API_KEY = 'WOurXSGPYOGvLJy2DjGirkxRrWDZnYgP';

function App() {
  const [most, SetMost] = useState("Default Title");
  const [time, SetTime] = useState("Default Period");
  const [num, SetNum] = useState(1);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://api.nytimes.com/svc/mostpopular/v2/${most}${time}.json?api-key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.results.slice(0, num));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [most, time, num]);

  return (
    <>
    <header className='App-header'>
      <Title titleMost={most} titleTime={time}/>
    </header>
    <div className="main-container">
      <div className="filter-container">
          <Sidebar mostFunction = {SetMost} timeFunction = {SetTime} numFunction = {SetNum}> </Sidebar>
      </div>

      <div className="article-container">
      <Articles articles={articles}/>
      </div>
    </div>
    </>
  )
}

export default App
