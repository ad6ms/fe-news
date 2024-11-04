export default function ArticleCard(articles) {
  const { title, topic, author, comment_count, votes, created_at } =
    articles.article;

  return (
    <div>
      <h2> {title} </h2>
      <p> {topic}</p>
      <p> {author}</p>
      <p> {comment_count}</p>
      <p> {votes}</p>
    </div>
  );
}
