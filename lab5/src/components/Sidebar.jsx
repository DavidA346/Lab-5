import './Sidebar.css'
import React, {useState} from 'react';

const Sidebar = ({mostFunction, timeFunction, numFunction}) => {
    const reassignTitle = (event) => mostFunction(event.target.value);
    const reassignTitlePeriod = (event) => timeFunction(event.target.value);
    const reassignNumber = () => {
        console.log(number)
        numFunction(number);}

    const [number, SetNumber] = useState(1);

    return (
    <div className='filter-container'>
        <form className="number-of-articles">
            <div className="search-bar">
            <input type="number" placeholder="Enter a value 1-15" min={1} max={15} value = {number} required onChange={(event)=>{
                console.log(event)
                SetNumber(event.target.value)}}/> <br />
            </div>
            <div className="search-button">
            <button type = "button" onClick={reassignNumber}>Search</button>
            </div>
        </form>
        
        <form className="sort-by">
                <div>
                    <label htmlFor="sort-type" className="sort-by-title">Sort By:</label> <br/>
                    <div className="radio-options">
                        <div>
                            <label htmlFor="most-viewed">Most Viewed</label>
                            <input type="radio" name="sort-type" id="most-viewed" value = "Most Viewed" onChange = {reassignTitle}/>
                        </div>
    
                        <div>
                            <label htmlFor="most-shared">Most Shared</label>
                            <input type="radio" name="sort-type" id="most-shared" value = "Most Shared" onChange = {reassignTitle}/>
                        </div>
                        
                        <div>
                            <label htmlFor="most-emailed">Most Emailed</label>
                            <input type="radio" name="sort-type" id="most-emailed" value = "Most Emailed" onChange = {reassignTitle}/>
                        </div>
                    </div>
                </div>
            </form>

            <form className="time-frame">
                <div>
                    <label htmlFor="time-type" className="time-frame-title">Time Frame:</label> <br/>
                    <div className="radio-options">
                        <div>
                            <label htmlFor="day">Day</label>
                            <input type="radio" name="time-type" id="day" value = "Day" onChange = {reassignTitlePeriod}/>
                        </div>
    
                        <div>
                            <label htmlFor="week">Week</label>
                            <input type="radio" name="time-type" id="week" value = "Week" onChange = {reassignTitlePeriod}/>
                        </div>
                        
                        <div>
                            <label htmlFor="month">Month</label>
                            <input type="radio" name="time-type" id="month" value = "Month" onChange = {reassignTitlePeriod}/>
                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Sidebar
