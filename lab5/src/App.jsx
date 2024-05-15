import './App.css'
import {useState, useEffect} from 'react'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import Articles from './components/Articles'

const API_KEY = 'WOurXSGPYOGvLJy2DjGirkxRrWDZnYgP';

function App() {
  const [most, SetMost] = useState("Default Title");
  const [time, SetTime] = useState("Default Period");
  const [num, SetNum] = useState(0);

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://api.nytimes.com/svc/mostpopular/v2/${most}${time}.json?api-key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (num > 15) {
          alert("Number is higher than 15.");
        }
        if (currentPage == 1){
          if (num <= 6){
            setArticles(data.results.slice(0, num));
          }
          else if (num > 6 && num <= 15) {
            setArticles(data.results.slice(0, 6));
          }
        }
        else if (currentPage == 2){
          if (num > 6 && num <=12){
            setArticles(data.results.slice(6, num));
          }
          else if (num > 12 && num <= 15) {
            setArticles(data.results.slice(6, 12));
          }
          else if (num <= 6) {
            setArticles(data.results.slice(0, 0));
          }
        }
        else if (currentPage == 3){
          if (num > 12 && num <= 15){
            setArticles(data.results.slice(12, num));
          }
          else if (num <= 12) {
            setArticles(data.results.slice(0, 0));
          }
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [most, time, num, currentPage]);

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
    <footer>
      <div className='page-buttons'>
        <button className='page-button' onClick={() => setCurrentPage(1)}>1</button>
        <button className='page-button' onClick={() => setCurrentPage(2)}>2</button>
        <button className='page-button' onClick={() => setCurrentPage(3)}>3</button>
      </div>
    </footer>
    </>
  )
}

export default App
