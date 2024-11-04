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
      <div className="article-handler">
        <ul>
          {articles.map((article) => {
            return (
              <a href={`/api/articles/${article.article_id}`}>
                <li key={article.article_id}>
                  <ArticleCard article={article} />
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
}
