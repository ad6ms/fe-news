import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import CommentHandler from "./CommentHandler";

export default function View() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    if (article_id !== "string") {
      setArticle("");
    }
    getArticleById(article_id).then((response) => {
      setArticle(response.article);
    });
  }, [article_id]);

  return (
    <>
      <div>
        <h2> {article.title} </h2>
        <p> {article.body} </p>
      </div>
      <CommentHandler article_id={article_id} />
    </>
  );
}
