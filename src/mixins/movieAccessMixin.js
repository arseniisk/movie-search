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
      const moviesResult = await this.omdbApi.getList(
        this.searchText,
        this.searchType,
        this.currentPage
      );

      if (moviesResult.isError) {
        this.showError(moviesResult.error);
        return;
      }
      if (moviesResult.Response && moviesResult.Response === "False") {
        this.showError(moviesResult.Error);
        return;
      }

      this.movies = moviesResult.Search;
      this.total = moviesResult.totalResults;
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
