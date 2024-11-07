import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-r6j6.onrender.com",
  timeout: 1000,
});

export function getArticles(sortBy, orderBy) {
  const sort = sortBy ?? "sort_by=created_at";
  const order = orderBy ?? "&order=DESC";
  return api
    .get(`/api/articles?${sort}${order}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err, "error");
    });
}

export function getArticleById(id) {
  return api
    .get(`/api/articles/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err, "error");
    });
}

export function getArticleComments(id) {
  return api
    .get(`/api/articles/${id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err, "error");
    });
}

export function updateArticleVotes(id, incVotes) {
  return api.patch(`/api/articles/${id}`, incVotes);
}

export function postNewComment(userComment, id) {
  return api
    .post(`/api/articles/${id}/comments`, userComment)
    .then((response) => {
      return response.data.newComment;
    });
}

export function deleteComment(comment) {
  return api.delete(`/api/comments/${comment}`);
}

export function getTopics() {
  return api.get("/api/topics").then((response) => {
    return response.data;
  });
}
