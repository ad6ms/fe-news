export default function CommentCard({ comment }) {
  return (
    <div className="comment">
      <h3> {comment.author} </h3>
      <p> {comment.body} </p>
      <p> {comment.votes} </p>
    </div>
  );
}
