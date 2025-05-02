const List = ({ article, ...props }) => {
  return (
    <div className="col-md-4 article-container">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top article-image"
          alt={article.title}
          src={article.imageUrl}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.snippet}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={article.link}
                target="_blank"
                className="btn btn-sm btn-outline-secondary"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
