import { useEffect, useState } from "react";
import { ArticleHandler } from "./ArticleHandler";
import { getTopics } from "../../api";

export default function QueryBar() {
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState("");
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  function handleOrder(e) {
    setOrder(e.target.value);
  }

  function handleTopicFilter(e) {
    setCurrentTopic(e.target.value);
  }

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response.topics);
    });
  }, []);

  return (
    <>
      <div className="querybar">
        <form>
          {" "}
          <label htmlFor="filter"> Topic: </label>
          <select name="topic" id="topic" onChange={handleTopicFilter}>
            <option></option>
            {topics.map((topic) => {
              return (
                <option value={topic.slug} key={topic.slug}>
                  {topic.slug[0].toUpperCase() +
                    topic.slug.slice(1, topic.slug.length)}
                </option>
              );
            })}
          </select>
          <label htmlFor="sortby"> Sort by: </label>
          <select name="sortby" id="sortby" onChange={handleSortBy}>
            <option></option>
            <option value="sort_by=created_at"> Date</option>
            <option value="sort_by=comment_count">Comments</option>
            <option value="sort_by=votes">Votes</option>
          </select>
          <label htmlFor="order"> Order: </label>
          <select name="order" id="order" onChange={handleOrder}>
            <option></option>
            <option value="&order=ASC">
              {" "}
              {sortBy === "sort_by=created_at" ? (
                <>Newest first</>
              ) : (
                <>Lowest to highest</>
              )}{" "}
            </option>
            <option value="&order=DESC">
              {" "}
              {sortBy === "sort_by=created_at" ? (
                <>Oldest first</>
              ) : (
                <>Highest to lowest</>
              )}{" "}
            </option>
          </select>
        </form>
      </div>
      <ArticleHandler sortBy={sortBy} order={order} topic={currentTopic} />
    </>
  );
}
