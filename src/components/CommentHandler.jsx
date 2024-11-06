import { useEffect, useState } from "react";
import { getArticleComments, postNewComment } from "../../api";
import CommentCard from "./CommentCard";

export default function CommentHandler({ article_id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, []);

  async function handleSubmit(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      const userComment = {
        body: event.target.value,
        username: "grumpy19",
      };

      const postedComments = await postNewComment(userComment, article_id);
      setComments((prevComments) => [postedComments, ...prevComments]);
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
              <CommentCard comment={comment} setComments={setComments} />
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
