import axios from "axios";

const instance = axios.create({
  baseURL: "http://img.omdbapi.com/?apikey=[23d18cc9]&",
});

function fetchData() {
  return instance.post();
}

function fetchImg() {
  return instance.get();
}
export { fetchData, fetchImg };
