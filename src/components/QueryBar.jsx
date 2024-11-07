import { useState } from "react";
import { ArticleHandler } from "./ArticleHandler";

export default function QueryBar() {
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState("");

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  function handleOrder(e) {
    setOrder(e.target.value);
  }

  return (
    <>
      <div className="querybar">
        <form>
          {" "}
          <label htmlFor="filter"> Topic: </label>
          <select name="topic" id="topic">
            <option></option>
            <option>1</option>
            <option>2</option>
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
            <option value="&order=ASC"> Ascending </option>
            <option value="&order=DESC"> Descending </option>
          </select>
        </form>
      </div>
      <ArticleHandler sortBy={sortBy} order={order} />
    </>
  );
}
