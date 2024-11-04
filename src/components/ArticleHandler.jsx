import { getArticles } from "../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export function ArticleHandler() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles);
    });
  }, []);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
