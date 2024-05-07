import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='filter-container'>
        <form className="number-of-articles">
            <div className="search-bar">
            <input type="number" placeholder="Enter a value 1-15" min={1} max={15} required/> <br />
            </div>
            <div className="search-button">
            <input type="submit" value={"Search"}/>
            </div>
        </form>

        <form className="sort-by">
                <div>
                    <label htmlFor="sort-type" className="sort-by-title">Sort By:</label> <br/>
                    <div className="radio-options">
                        <div>
                            <label htmlFor="most-viewed">Most Viewed</label>
                            <input type="radio" name="sort-type" id="most-viewed"/>
                        </div>
    
                        <div>
                            <label htmlFor="most-shared">Most Shared</label>
                            <input type="radio" name="sort-type" id="most-shared"/>
                        </div>
                        
                        <div>
                            <label htmlFor="most-emailed">Most Emailed</label>
                            <input type="radio" name="sort-type" id="most-emailed"/>
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
                            <input type="radio" name="time-type" id="day"/>
                        </div>
    
                        <div>
                            <label htmlFor="week">Week</label>
                            <input type="radio" name="time-type" id="week"/>
                        </div>
                        
                        <div>
                            <label htmlFor="month">Month</label>
                            <input type="radio" name="time-type" id="month"/>
                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Sidebar
