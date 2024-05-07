import './Articles.css'
const Articles = () => {
  return (
    <div className="news-container">

            <div className="card" id="0-card">
                <div className="card-top-content">
                    <div className="card-title" id="0-card-title"></div>
                    <div className="card-date" id="0-card-date"></div>
                </div>
                <div className="card-bottom-content">
                    <div className="card-image" id="0-card-image"></div>
                    <div className="card-text" id="0-card-text"></div>
                </div>
            </div>

            <div className="card" id="1-card">
                <div className="card-top-content">
                    <div className="card-title" id="1-card-title"></div>
                    <div className="card-date" id="1-card-date"></div>
                </div>
                <div className="card-bottom-content">
                    <div className="card-image" id="1-card-image"></div>
                    <div className="card-text" id="1-card-text"></div>
                </div>
            </div>

            <div className="card" id="2-card">
                <div className="card-top-content">
                    <div className="card-title" id="2-card-title"></div>
                    <div className="card-date" id="2-card-date"></div>
                </div>
                <div className="card-bottom-content">
                    <div className="card-image" id="2-card-image"></div>
                    <div className="card-text" id="2-card-text"></div>
                </div>
            </div>
        </div>
  )
}

export default Articles
