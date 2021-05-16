import axios from "axios";

export default class OmdbApi {
  baseUrl;

  constructor() {
    const omdbApiKey = process.env.VUE_APP_OMDB_API_KEY;
    this.baseURL = `http://www.omdbapi.com/?apikey=${omdbApiKey}&`;
  }

  async getList(title, type, page) {
    try {
      const response = await axios.get(
        `${this.baseURL}s=${title}&type=${type ? type : ""}&page=${page}`
      );
      return response.data;
    } catch (error) {
      let errorMessage =
        "An unknown error occured while getting a list of movies from OMDB.";
      return this.generateErrorResultObject(errorMessage);
    }
  }

  async getById(movieId) {
    try {
      const response = await axios.get(
        `${this.baseURL}&plot=full&i=${movieId}`
      );
      return response.data;
    } catch (error) {
      let errorMessage =
        "An unknown error occured while getting a movie by ID from OMDB.";
      return this.generateErrorResultObject(errorMessage);
    }
  }

  generateErrorResultObject(errorMessage) {
    return {
      isError: true,
      error: errorMessage,
    };
  }
}
