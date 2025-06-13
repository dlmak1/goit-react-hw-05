import axios from "axios";

class TmdbApi {
  constructor() {
    this.tmdbApi = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjJiZTUxMTM0ZjYwMzNkNzkzNDAwZjQwNGU4MDEzYSIsIm5iZiI6MTc0OTgxMDk1OC4yNDE5OTk5LCJzdWIiOiI2ODRiZmYwZWFkZGJlYThhMTg1YzczOWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UU9srtPVuUbNheS39AFc23feo-ZnsBSUlG7zeUCZtL4",
      },
    });
  }

  async fetchMovies() {
    try {
      const response = await this.tmdbApi.get("/trending/movie/day");
      return response.data.results;
    } catch (error) {
      console.error("Error fetching trending movies: ", error);
      throw error;
    }
  }

  async fetchMovieById(id) {
    try {
      const response = await this.tmdbApi.get(`/movie/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie with ID ${id}: `, error);
      throw error;
    }
  }

  async fetchCast(id) {
    try {
      const response = await this.tmdbApi.get(`/movie/${id}/credits`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching cast for movie with ID ${id}: `, error);
      throw error;
    }
  }

  async fetchReviews(id) {
    try {
      const response = await this.tmdbApi.get(`/movie/${id}/reviews`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching reviews for movie with ID ${id}: `, error);
      throw error;
    }
  }

  async fetchMovieByQuery(query) {
    try {
      const response = await this.tmdbApi.get("/search/movie", {
        params: { query },
      });
      return response.data.results;
    } catch (error) {
      console.error(`Error searching movies with query "${query}": `, error);
      throw error;
    }
  }
}

export default TmdbApi;
