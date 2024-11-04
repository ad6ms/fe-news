import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";

export default function View() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    if (article_id !== "string") {
      setArticle("");
      console.log(article);
    }
    getArticleById(article_id).then((response) => {
      setArticle(response.article);
    });
  }, [article_id]);

  console.log(article);
  return (
    <div>
      <h2> {article.title} </h2>
      <p> {article.body} </p>
    </div>
  );
}
