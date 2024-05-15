import './Sidebar.css';
import { useState } from 'react';

const Sidebar = ({ mostFunction, timeFunction, numFunction }) => {
  const [number, setNumber] = useState(1);

  const reassignNumber = () => {numFunction(number);}

  const mostChosen = (event) => {
    const value = event.target.value;
    if (value === 'Most Viewed') {
      mostFunction('viewed');
    } else if (value === 'Most Shared') {
      mostFunction('shared');
    } else if (value === 'Most Emailed') {
      mostFunction('emailed');
    }
  };

  const timePeriod = (event) => {
    const value = event.target.value;
    if (value === 'Day') {
      timeFunction('/1');
    } else if (value === 'Week') {
      timeFunction('/7');
    } else if (value === 'Month') {
      timeFunction('/30');
    }
  };

  return (
    <div className='filter-container'>
      <form className="number-of-articles">
        <div className="search-bar">
        <input type="number" placeholder="Enter a value 1-15" min={1} max={15} value = {number} required onChange={(event)=>{setNumber(event.target.value)}}/> <br />
        </div>
        <div className="search-button">
          <button type="button" onClick={reassignNumber}>Search</button>
        </div>
      </form>

      <form className="sort-by">
        <div>
          <label htmlFor="sort-type" className="sort-by-title">Sort By:</label> <br />
          <div className="radio-options">
            <div>
              <label htmlFor="most-viewed">Most Viewed</label>
              <input type="radio" name="sort-type" id="most-viewed" value="Most Viewed" onChange={mostChosen} />
            </div>
            <div>
              <label htmlFor="most-shared">Most Shared</label>
              <input type="radio" name="sort-type" id="most-shared" value="Most Shared" onChange={mostChosen} />
            </div>
            <div>
              <label htmlFor="most-emailed">Most Emailed</label>
              <input type="radio" name="sort-type" id="most-emailed" value="Most Emailed" onChange={mostChosen} />
            </div>
          </div>
        </div>
      </form>

      <form className="time-frame">
        <div>
          <label htmlFor="time-type" className="time-frame-title">Time Frame:</label> <br />
          <div className="radio-options">
            <div>
              <label htmlFor="day">Day</label>
              <input type="radio" name="time-type" id="day" value="Day" onChange={timePeriod} />
            </div>
            <div>
              <label htmlFor="week">Week</label>
              <input type="radio" name="time-type" id="week" value="Week" onChange={timePeriod} />
            </div>
            <div>
              <label htmlFor="month">Month</label>
              <input type="radio" name="time-type" id="month" value="Month" onChange={timePeriod} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
