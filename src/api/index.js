import axios from "axios";

const instance = axios.create({
  baseURL: "http://img.omdbapi.com/?i=tt3896198&apikey=23d18cc9",
  responseType: "blob",
});

function fetchData() {
  return instance.post();
}

function fetchImg() {
  return instance.get();
}
export { fetchData, fetchImg };
