import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjJiZTUxMTM0ZjYwMzNkNzkzNDAwZjQwNGU4MDEzYSIsIm5iZiI6MTc0OTgxMDk1OC4yNDE5OTk5LCJzdWIiOiI2ODRiZmYwZWFkZGJlYThhMTg1YzczOWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UU9srtPVuUbNheS39AFc23feo-ZnsBSUlG7zeUCZtL4",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
