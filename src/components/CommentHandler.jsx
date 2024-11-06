import { useEffect, useState } from "react";
import { getArticleComments, postNewComment } from "../../api";
import CommentCard from "./CommentCard";

export default function CommentHandler(id) {
  const { article_id } = id;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, [comments]);

  function handleSubmit(event) {
    const userComment = {
      body: event.target.value,
      username: "grumpy19",
    };
    if (event.key === "Enter") {
      postNewComment(userComment, article_id).then((response) => {});
      setNewComment("");
    }
  }

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
      <div className="add-comment-text">
        Add a comment:
        <input
          type="text"
          className="text-box"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleSubmit}
        ></input>
      </div>
    </div>
  );
}
