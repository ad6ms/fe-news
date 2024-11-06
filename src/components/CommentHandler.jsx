import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import CommentCard from "./CommentCard";

export default function CommentHandler(id) {
  const { article_id } = id;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, []);

  return (
    <div className="comments-display-box">
      <h2> Comments: </h2>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <CommentCard comment={comment} />
            </div>
          );
        })}{" "}
      </ul>
    </div>
  );
}
