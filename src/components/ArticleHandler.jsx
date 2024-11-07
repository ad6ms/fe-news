import { getArticles } from "../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export function ArticleHandler({ sortBy, order, topic }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(sortBy, order, topic).then((response) => {
      setArticles(response.articles);
    });
  }, [sortBy, order, topic]);

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
