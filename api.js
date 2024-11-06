import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-r6j6.onrender.com",
  timeout: 1000,
});

export function getArticles() {
  return api
    .get("/api/articles")
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
