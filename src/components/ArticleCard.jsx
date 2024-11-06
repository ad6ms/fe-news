import { Link } from "react-router-dom";
import { updateArticleVotes } from "../../api";
import { useState } from "react";

export default function ArticleCard(articles) {
  const {
    title,
    topic,
    author,
    comment_count,
    votes,
    created_at,
    article_img_url,
    article_id,
  } = articles.article;

  const [articleVotes, setArticleVotes] = useState(votes);

  const [voteError, setVoteError] = useState("");

  function handleClick(singleVote) {
    setArticleVotes((votes) => {
      return (votes += singleVote.inc_votes);
    });
    setVoteError("");
    updateArticleVotes(article_id, singleVote).catch(() => {
      setArticleVotes((votes) => {
        return (votes += singleVote.inc_votes);
      });
      setVoteError("Something went wrong");
    });
  }

  return (
    <>
      <div className="article-card">
        <div className="article-details">
          <Link key={article_id} to={`/articles/${article_id}`}>
            <h2> {title} </h2>
            <h3> {topic}</h3>
            <p> {author}</p>
            <p> Comments: {comment_count}</p>
          </Link>
          <p>
            <button
              className="up"
              onClick={() => handleClick({ inc_votes: 1 })}
            >
              updoot
            </button>
            {articleVotes}
            <button
              className="down"
              onClick={() => handleClick({ inc_votes: -1 })}
            >
              downdoot
            </button>
          </p>
        </div>
        <p> {voteError} </p>
        <Link to={`/articles/${article_id}`}>
          <img className="article-images" src={article_img_url}></img>
        </Link>
      </div>
    </>
  );
}
