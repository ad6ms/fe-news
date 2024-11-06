import { deleteComment } from "../../api";

export default function CommentCard({ comment, setComments }) {
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
      <button onClick={handleDelete}> Delete Comment </button>
      <p> Likes: {comment.votes} </p>
      <button> updoot </button>
      <button> downdoot </button>
    </div>
  );
}

//eventually need to add conditional logic to determine whether the delete comment button will be displayed based on user logged in
