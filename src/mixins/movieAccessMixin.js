import OmdbApi from "@/api/OmdbApi";

export default {
  data() {
    return {
      omdbApi: null,
    };
  },
  mounted() {
    this.omdbApi = new OmdbApi();
  },
  methods: {
    async loadMovieList() {
      const searchType = this.searchType === "all" ? "" : this.searchType;
      const moviesResult = await this.omdbApi.getList(
        this.searchText,
        searchType,
        this.currentPage
      );

      if (this.handleError(moviesResult)) return;

      this.movies = moviesResult.Search;
      this.total = moviesResult.totalResults;
    },
    async loadMovie(movieId) {
      const movieResult = await this.omdbApi.getById(movieId);
      if (this.handleError(movieResult)) return;
      this.movie = movieResult.Search;
    },
    handleError(result) {
      if (result.isError) {
        this.showError(result.error);
        return true;
      }
      if (result.Response && result.Response === "False") {
        this.showError(result.Error);
        return true;
      }
      return false;
    },
    showError(errorText) {
      this.$buefy.snackbar.open({
        message: errorText,
        type: "is-danger",
        position: "is-top",
      });
    },
  },
};
