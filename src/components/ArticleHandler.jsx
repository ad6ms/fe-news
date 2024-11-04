import { getArticles } from "../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

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
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                <li>
                  <ArticleCard article={article} />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
