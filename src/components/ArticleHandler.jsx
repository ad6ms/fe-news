import { getArticles } from "../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

export function ArticleHandler() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      console.log(response);
      setArticles(response.articles);
    });
  }, []);

  return (
    <>
      <div className="article-handler">
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
