export default function ArticleCard(articles) {
  const {
    title,
    topic,
    author,
    comment_count,
    votes,
    created_at,
    article_img_url,
  } = articles.article;

  return (
    <div className="article-card">
      <div className="article-details">
        <h2> {title} </h2>
        <h3> {topic}</h3>
        <p> {author}</p>
        <p> {votes}</p>
        <p>
          {" "}
          <button> {comment_count} </button>{" "}
        </p>
      </div>
      <img className="article-images" src={article_img_url}></img>
    </div>
  );
}
