import { deleteComment } from "../../api";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function CommentCard({ comment, setComments }) {
  const { user, isLoggedIn } = useContext(UserContext);
  async function handleDelete() {
    if (comment.author === "grumpy19") {
      await deleteComment(comment.comment_id);
      setComments((prevComments) =>
        prevComments.filter(
          (eachComment) => eachComment.comment_id !== comment.comment_id
        )
      );
    }
  }
  return (
    <div className="comment">
      <h3> {comment.author} :</h3>
      <p> {comment.body} </p>
      {comment.author === user ? (
        <button onClick={handleDelete}> Delete Comment </button>
      ) : (
        ""
      )}
      <p> Likes: {comment.votes} </p>
      <button> updoot </button>
      <button> downdoot </button>
    </div>
  );
}
