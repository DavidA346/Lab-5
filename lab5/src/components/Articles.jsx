import './Articles.css';

const Articles = ({ articles }) => {
  return (
    <div className="news-container">
        <div className="article-grid">
            {articles.map((article, index) => (
            <div className="card" key={index}>
            <div className="card-top-content">
                <div className="card-title">{article.title}</div>
                <div className="card-date">{new Date(article.published_date).toISOString().slice(0, 10)}</div>
            </div>
            <div className="card-bottom-content">
            <div className="card-image">
                {article.media && article.media[0] && article.media[0]['media-metadata'] && (
                    <img
                        src={article.media[0]['media-metadata'][2].url}
                        alt={article.media[0].caption}
                    />
                    )}
            </div>
                <div className="card-text">{article.abstract}</div>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Articles;
